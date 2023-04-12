const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();

  console.log("Counter address:", counter.address);

  const contractAddress = {
    address: counter.address
  };
  fs.writeFileSync("./contract-address.json", JSON.stringify(contractAddress));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
