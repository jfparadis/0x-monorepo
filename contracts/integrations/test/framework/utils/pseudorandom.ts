import { Numberish } from '@0x/contracts-test-utils';
import { BigNumber } from '@0x/utils';
import * as _ from 'lodash';
import * as seedrandom from 'seedrandom';

class PRNGWrapper {
    public readonly seed = process.env.SEED || Math.random().toString();
    public readonly rng = seedrandom(this.seed);

    /*
     * Pseudorandom version of _.sample. Picks an element of the given array with uniform probability.
     * Return undefined if the array is empty.
     */
    public sample<T>(arr: T[], weights?: number[]): T | undefined {
        if (arr.length === 0) {
            return undefined;
        }

        let index: number;
        if (weights !== undefined) {
            const cdf = weights.map((_weight, i) => _.sum(weights.slice(0, i + 1)) / _.sum(weights));
            const x = this.rng();
            index = cdf.findIndex(value => value > x);
        } else {
            index = Math.abs(this.rng.int32()) % arr.length;
        }
        return arr[index];
    }

    /*
     * Pseudorandom version of _.sampleSize. Returns an array of `n` samples from the given array
     * (with replacement), chosen with uniform probability. Return undefined if the array is empty.
     */
    public sampleSize<T>(arr: T[], n: number, weights?: number[]): T[] | undefined {
        if (arr.length === 0) {
            return undefined;
        }
        const samples = [];
        for (let i = 0; i < n; i++) {
            samples.push(this.sample(arr, weights) as T);
        }
        return samples;
    }

    /*
     * Pseudorandom version of getRandomPortion/getRandomInteger. If no distribution is provided,
     * samples an integer between the min and max uniformly at random. If a distribution is
     * provided, samples an integer from the given distribution (assumed to be defined on the
     * interval [0, 1]) scaled to [min, max].
     */
    public integer(min: Numberish, max: Numberish, distribution: () => Numberish = this.rng): BigNumber {
        const range = new BigNumber(max).minus(min);
        return new BigNumber(distribution())
            .times(range)
            .integerValue(BigNumber.ROUND_HALF_UP)
            .plus(min);
    }

    /*
     * Returns a function that produces samples from the Kumaraswamy distribution parameterized by
     * the given alpha and beta. The Kumaraswamy distribution is like the beta distribution, but
     * with a nice closed form.
     * https://en.wikipedia.org/wiki/Kumaraswamy_distribution
     * https://www.johndcook.com/blog/2009/11/24/kumaraswamy-distribution/
     */
    public kumaraswamy(this: PRNGWrapper, alpha: Numberish, beta: Numberish): () => BigNumber {
        const ONE = new BigNumber(1);
        return () => {
            const u = new BigNumber(this.rng()).modulo(ONE); // u ~ Uniform(0, 1)
            // Evaluate the inverse CDF at `u` to obtain a sample from Kumaraswamy(alpha, beta)
            return ONE.minus(ONE.minus(u).exponentiatedBy(ONE.dividedBy(beta))).exponentiatedBy(ONE.dividedBy(alpha));
        };
    }
}

export const Pseudorandom = new PRNGWrapper();
export const Distributions = {
    Uniform: Pseudorandom.rng,
    Kumaraswamy: Pseudorandom.kumaraswamy.bind(Pseudorandom),
};
