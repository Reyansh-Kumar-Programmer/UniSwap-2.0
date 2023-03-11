require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/vJxED076wU023XDq6Fl_Ow7V1WM78qmQ',
      accounts: [
        'Your Private Account Key',
      ],
    },
  }
};
