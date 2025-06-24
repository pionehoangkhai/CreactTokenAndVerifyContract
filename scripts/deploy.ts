import { ethers } from 'hardhat';

async function main() {
  const gasLimit = 3000000;
  const testNet = await ethers.deployContract('Dogs', { gasLimit });

  await testNet.waitForDeployment();

  console.log('Token Contract Deployed at ' + testNet.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
///lưu ý chạy lệnh tạo token
///npx hardhat compile
///npx hardhat run scripts/deploy.ts --network pione-testnet

///khi tạo token xong lấy file hardhat.config.txt  sửa lại cho file hardhat.config.js để verify 