require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.INFURA_SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    hardhat: {
      chainId: 1337,
    },
  },
};

// require('dotenv').config();
// require('@nomicfoundation/hardhat-toolbox');

// module.exports = {
//   solidity: "0.8.20",
//   networks: {
//     sepolia: {
//       url: process.env.INFURA_SEPOLIA_URL,
//       accounts: [process.env.PRIVATE_KEY],
//     },
//     hardhat: {
//       chainId: 1337
//     },
//   },
// };