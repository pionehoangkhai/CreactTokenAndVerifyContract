require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.30",
  networks: {
    // // for mainnet
    // "pione-mainnet": {
    //   url: "https://rpc.viction.xyz",
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    // for testnet
    "Tobe-Chain": {
      url: "http://172.29.205.241:8545",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  defaultNetwork: "Tobe-Chain",

   // Cấu hình explorer (ví dụ Blockscout)
  etherscan: {
    apiKey: {
      "Tobe-Chain": "abc", // Không cần thật nếu dùng Blockscout
    },
    customChains: [
      {
        network: "Tobe-Chain",
        chainId: 6032000, // Chain ID của mạng bạn
        urls: {
          apiURL: "http://localhost/api",     // <-- Địa chỉ API
          browserURL: "http://localhost",    // <-- Địa chỉ trang explorer
        },
      },
    ],
  },
};

