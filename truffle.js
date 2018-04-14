const fs = require('fs');
var HDWalletProvider = require("truffle-hdwallet-provider");

// First read in the secrets.json to get our mnemonic
let secrets
let mnemonic
let infuraApiKey
if (fs.existsSync('secrets.json')) {
  secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'))
  mnemonic = secrets.mnemonic
  infuraApiKey = secrets.infura
} else {
  console.log('No secrets.json found. If you are trying to publish EPM ' +
              'this will fail. Otherwise, you can ignore this message!')
  mnemonic = ''
  infuraApiKey = ''
}

module.exports = {
  networks: {
    live: {
      network_id: 1, // Ethereum public network
      host: "10.135.82.20",
      port: 22018,
      // optional config values
      // gas
      // gasPrice
      // from - default address to use for any transaction Truffle makes during migrations
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/' + infuraApiKey)
      },
      network_id: '3',
      gas: 4000000
    },
    testrpc: {
      network_id: 'default'
    },
    coverage: {
      host: "localhost",
      network_id: "*",
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
