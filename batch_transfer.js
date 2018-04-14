const DHTT = artifacts.require('./DHTT.sol');

const fs = require('fs');
const filename = 'addresses.txt'

const reward = 1000;
const chunk = 5;

module.exports = function(callback) {
    var addresses = fs.readFileSync(filename, 'utf8').toString().split('\n');

    var dhtt;
    DHTT.deployed().then(function(instance) {
        dhtt = instance;
        for (i = 0, j = addresses.length; i < j; i += chunk) {
            batch = addresses.slice(i, i + chunk);
            console.log('Next batch')
            dhtt.batchTransfer(reward, batch);
        }
    });
}
