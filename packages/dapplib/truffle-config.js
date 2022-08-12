require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet riot pitch uncover hockey kite slot general'; 
let testAccounts = [
"0xfc11ec03e3c6dd9eae1d8b610464c1d3f90a0e336708ab5408cda4edaf9632e3",
"0x64d2d6345761544efd0e9849919ea131abab35f0876470e30ce404023f1a2b84",
"0xc349e1e6c3d55f295f112b8ec99a4a711d3c4331d10aea44d9f2a68ef001a45b",
"0x7e8fe499632ecbb40fae2054e0878a22fa58c293a76c0feb3672d391f2db17a9",
"0xa7921e0eaf1ae4b5f9bcf8b7612f07f4efe38172eed713f7a5a0a1503a2826ef",
"0x5af1fbbfe3f4dbd195ba1b484caf7c748d28bc566d06315aaf655f546110bc23",
"0x53d7e5938f43948f7a195e6c22a48e446ff110d6db6b532c248a2f287cdc2527",
"0x6de900df6ebf6c74a53fbfedf8bfed6f3e0dc52aeca8323a98276a1b2fcdee5c",
"0x9a07dfded1b619bd5efa2d6857c64f0735e1e421a04954e09e8f1dce24aee5fe",
"0x1bac45036a42fd53314eb73077a4a2bf4c94fb569634114692747c01eb41506b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

