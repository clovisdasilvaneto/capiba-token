const hre = require("hardhat");

async function main() {
  const CapibaToken = await hre.ethers.getContractFactory("CapibaToken");
  const capibaToken = await CapibaToken.deploy(100000000, 50);
  await capibaToken.deployed();

  console.log("CapibaToken token deployed: ", capibaToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
