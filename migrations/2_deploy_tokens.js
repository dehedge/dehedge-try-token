const DHTT = artifacts.require('./DHTT.sol');

module.exports = (deployer) => {
  deployer.deploy(DHTT);
};
