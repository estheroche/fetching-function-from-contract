const ethers = require("ethers")


const INFURA_ID = '9703725a823c4aaca5eba16007d80478'

async function getData(address) {

    //mainnet
    const provider = ethers.getDefaultProvider("mainnet");
    const balance = await provider.getBalance(address);
    const transactionCount = await provider.getTransactionCount(address);
    const getBlockNumber = await provider.getBlockNumber(address)
    console.log(ethers.formatEther(balance))
    console.log(transactionCount)
    console.log(getBlockNumber)

    //sepolia
     
     const providerSepolia = ethers.getDefaultProvider(`https://goerli.infura.io/v3/${INFURA_ID}`);
     const balanceSepolia = await providerSepolia.getBalance(address);
     const transactionCountSepolia = await providerSepolia.getTransactionCount(address);
     const getBlockNumberSEpolia = await providerSepolia.getBlockNumber(address)
     console.log(ethers.formatEther(balanceSepolia))
     console.log(transactionCountSepolia)
     console.log(getBlockNumberSEpolia)

     //goerli

     const providerGoerli = ethers.getDefaultProvider(`https://goerli.infura.io/v3/${INFURA_ID}`);
     const balanceGoerli = await providerGoerli.getBalance(address);
     const transactionCountGoerli = await providerGoerli.getTransactionCount(address);
     const getBlockNumberGoerli = await providerGoerli.getBlockNumber(address)
     console.log(ethers.formatEther(balanceGoerli))
     console.log(transactionCountGoerli)
     console.log(getBlockNumberGoerli)

}


getData('0x077FC8d10f15aE2bf5aD1003a188a700805B0718')