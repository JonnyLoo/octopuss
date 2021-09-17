const OctopussToken = artifacts.require('Octopuss')

module.exports = function(deployer) {
  deployer.deploy(OctopussToken)
}
