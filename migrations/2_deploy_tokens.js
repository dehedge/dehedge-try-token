const DHTTCoin = artifacts.require('./DHTTCoin.sol');

module.exports = (deployer) => {
  deployer.deploy(DHTTCoin);
};
