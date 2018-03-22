import { Networks } from '@0xproject/react-shared';
import { BigNumber } from '@0xproject/utils';

export const constants = {
    DECIMAL_PLACES_ETH: 18,
    DECIMAL_PLACES_ZRX: 18,
    GENESIS_ORDER_BLOCK_BY_NETWORK_ID: {
        1: 4145578,
        42: 3117574,
        50: 0,
        3: 1719261,
        4: 1570919,
    } as { [networkId: number]: number },
    HOME_SCROLL_DURATION_MS: 500,
    HTTP_NO_CONTENT_STATUS_CODE: 204,
    LOCAL_STORAGE_KEY_ACCEPT_DISCLAIMER: 'didAcceptPortalDisclaimer',
    LOCAL_STORAGE_KEY_DISMISS_WETH_NOTICE: 'hasDismissedWethNotice',
    MAKER_FEE: new BigNumber(0),
    MAINNET_NAME: 'Main network',
    MINT_AMOUNT: new BigNumber('100000000000000000000'),
    NETWORK_ID_MAINNET: 1,
    NETWORK_ID_KOVAN: 42,
    NETWORK_ID_TESTRPC: 50,
    NULL_ADDRESS: '0x0000000000000000000000000000000000000000',
    PROVIDER_NAME_LEDGER: 'Ledger',
    PROVIDER_NAME_METAMASK: 'Metamask',
    PROVIDER_NAME_PARITY_SIGNER: 'Parity Signer',
    PROVIDER_NAME_MIST: 'Mist',
    PROVIDER_NAME_GENERIC: 'Injected Web3',
    PROVIDER_NAME_PUBLIC: '0x Public',
    ROLLBAR_ACCESS_TOKEN: 'a6619002b51c4464928201e6ea94de65',
    S3_DOC_BUCKET_ROOT: 'https://s3.amazonaws.com/doc-jsons',
    S3_STAGING_DOC_BUCKET_ROOT: 'https://s3.amazonaws.com/staging-doc-jsons',
    SUCCESS_STATUS: 200,
    UNAVAILABLE_STATUS: 503,
    TAKER_FEE: new BigNumber(0),
    TESTNET_NAME: 'Kovan',
    PROJECT_URL_ETHFINEX: 'https://www.bitfinex.com/ethfinex',
    PROJECT_URL_AMADEUS: 'http://amadeusrelay.org',
    PROJECT_URL_DDEX: 'https://ddex.io',
    PROJECT_URL_DECENT_EX: 'https://decent.exchange',
    PROJECT_URL_DEXTROID: 'https://www.dextroid.io',
    PROJECT_URL_ERC_DEX: 'https://ercdex.com',
    PROJECT_URL_OPEN_RELAY: 'https://openrelay.xyz',
    PROJECT_URL_RADAR_RELAY: 'https://radarrelay.com',
    PROJECT_URL_PARADEX: 'https://paradex.io',
    PROJECT_URL_DYDX: 'https://dydx.exchange',
    PROJECT_URL_MELONPORT: 'https://melonport.com',
    PROJECT_URL_DISTRICT_0X: 'https://district0x.io',
    PROJECT_URL_DHARMA: 'https://dharma.io',
    PROJECT_URL_LENDROID: 'https://lendroid.com',
    PROJECT_URL_MAKER: 'https://makerdao.com',
    PROJECT_URL_ARAGON: 'https://aragon.one',
    PROJECT_URL_BLOCKNET: 'https://blocknet.co',
    PROJECT_URL_0CEAN: 'http://the0cean.com',
    PROJECT_URL_STATUS: 'https://status.im',
    PROJECT_URL_AUGUR: 'https://augur.net',
    PROJECT_URL_AUCTUS: 'https://auctus.org',
    PROJECT_URL_OPEN_ANX: 'https://www.openanx.org',
    PROJECT_URL_IDT: 'https://kinalpha.com',
    URL_ANGELLIST: 'https://angel.co/0xproject/jobs',
    URL_BITLY_API: 'https://api-ssl.bitly.com',
    URL_BLOG: 'https://blog.0xproject.com/latest',
    URL_DISCOURSE_FORUM: 'https://forum.0xproject.com',
    URL_FIREFOX_U2F_ADDON: 'https://addons.mozilla.org/en-US/firefox/addon/u2f-support-add-on/',
    URL_TESTNET_FAUCET: 'https://faucet.0xproject.com',
    URL_GITHUB_ORG: 'https://github.com/0xProject',
    URL_GITHUB_WIKI: 'https://github.com/0xProject/wiki',
    URL_METAMASK_CHROME_STORE: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
    URL_MIST_DOWNLOAD: 'https://github.com/ethereum/mist/releases',
    URL_PARITY_CHROME_STORE:
        'https://chrome.google.com/webstore/detail/parity-ethereum-integrati/himekenlppkgeaoeddcliojfddemadig',
    URL_REDDIT: 'https://reddit.com/r/0xproject',
    URL_STANDARD_RELAYER_API_GITHUB: 'https://github.com/0xProject/standard-relayer-api/blob/master/README.md',
    URL_TWITTER: 'https://twitter.com/0xproject',
    URL_WETH_IO: 'https://weth.io/',
    URL_ZEROEX_CHAT: 'https://chat.0xproject.com',
    URL_WEB3_DOCS: 'https://github.com/ethereum/wiki/wiki/JavaScript-API',
    URL_WEB3_DECODED_LOG_ENTRY_EVENT:
        'https://github.com/0xProject/web3-typescript-typings/blob/f5bcb96/index.d.ts#L123',
    URL_WEB3_LOG_ENTRY_EVENT: 'https://github.com/0xProject/web3-typescript-typings/blob/f5bcb96/index.d.ts#L127',
    URL_WEB3_PROVIDER_DOCS: 'https://github.com/0xProject/web3-typescript-typings/blob/f5bcb96/index.d.ts#L150',
    URL_BIGNUMBERJS_GITHUB: 'http://mikemcl.github.io/bignumber.js',
};
