const Migrations = artifacts.require("Vault");

require('dotenv').config();

console.log(process.env.VAULT_NAME);

const vaultName = process.env.VAULT_NAME;
const tokenAddress = process.env.VAULT_TOKEN_ADDRESS;

module.exports = function (deployer) {
  deployer.deploy(Migrations, vaultName, tokenAddress);
};
