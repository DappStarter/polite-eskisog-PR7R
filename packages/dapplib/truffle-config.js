require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan razor soap honey inflict kite slot gas'; 
let testAccounts = [
"0x71a3fb9ca635201d4020a6f27cb651e2ba70cee0b914dbe993537243c8f267b9",
"0xa55fe9eb70374ab7a7f0002f0071c8ec7d4562e47522d07c2366a88bd8dd35ec",
"0xbff623a4be43746a504e28f6a39db4be13760f1e87fda199b829e25381d62a11",
"0xd8e1d6b91ee7540ae1479b830eecdae6b90085732e1b62599e7dce61258415a7",
"0x0ae857e48fca9c526d6223d2411282cb7ac7595ade0216d6166b9ae4e5065fd9",
"0x21e1beb9692e98e7d4a27da92d2bed25717e7dec33b7478d10861bbd5df01e8a",
"0x9db0810c97f336e0453cbf8d94ea4dec205dd6d8309d7841d03064d20242c85c",
"0x7a9c720433486379dba29d4b8db7878eb25e6c2739eebb623ce7b47066c337c3",
"0xd9283e6f8532e47f234aef37c88f0faa93a092d861213e4670a5d7ee03ce1d27",
"0xe90be9f04116067ff35b1647550a40d7ab464ed12bf956fdca8e857f5818494d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


