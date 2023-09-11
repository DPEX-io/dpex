require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-contract-sizer")
require('@typechain/hardhat')

// ENV
const {config} = require('dotenv');
const { resolve } = require('path');
config({ path: resolve(__dirname, "./.env") });
const ADMIN_PKEY = process.env.ADMIN_PKEY || "";
const ADMIN_PKEY_TESTNET = process.env.ADMIN_PKEY_TESTNET || "";
console.log(" keys", ADMIN_PKEY_TESTNET)

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.info(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    localhost: {
      url: "http://localhost:8545",
      saveDeployments: false,
      /*
        notice no mnemonic here? it will just use account 0 of the hardhat node to deploy
        (you can put in a mnemonic here to set the deployer locally)
      */
    },
    stagingv3: {
      url: "https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor",
      accounts: [ADMIN_PKEY_TESTNET],
    },
    europa: {
      url: "https://mainnet.skalenodes.com/v1/elated-tan-skat",
      accounts: [ADMIN_PKEY],
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/e0c8e6a9d33f42daafaac936d706c9d2",
      accounts: [ADMIN_PKEY],
      // gasPrice: 50000000000,  // wei
    },
    goerli: {
      url: "https://eth-goerli.gateway.pokt.network/v1/lb/f0c06ca797ece1fe09dcdf75",
      accounts: [ADMIN_PKEY_TESTNET],
      gasPrice: 50000000000,  // wei
    },
  },
  etherscan: {
    apiKey: {
      europa: "acb",
      stagingv3: "abc"
    },
    customChains: [
      {
        network: "europa",
        chainId: 2046399126,
        urls: {
          apiURL: "https://elated-tan-skat.explorer.mainnet.skalenodes.com/api",
          browserURL: "https://elated-tan-skat.explorer.mainnet.skalenodes.com"
        }
      },
      {
        network: "stagingv3",
        chainId: 476158412,
        urls: {
          apiURL: "https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com/api",
          browserURL: "https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com"
        }
      }
    ],
  },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1
      }
    }
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
}
