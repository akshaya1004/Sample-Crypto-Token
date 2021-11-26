var AkshayToken = artifacts.require("SampleToken");

module.exports = function(deployer) {
  deployer.deploy(AkshayToken, "Akshay Token", "Akki", 18, 1000);
};