require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/NFv7Q_FKbbNqOiztVHr7pWwDIm-I1hWa",
      accounts: [
        "bec82f09be8ced94053199dc1bc5ef8c52b90cd70369c5640548265a6531e89e",
      ],
    },
  },
};
