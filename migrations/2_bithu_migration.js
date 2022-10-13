const BithuMigration = artifacts.require("BithuContract");


module.exports = function (deployer) {
    deployer.deploy(BithuMigration );
  };