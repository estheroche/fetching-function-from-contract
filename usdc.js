
const {ethers} = require("ethers");
//const { abi } = require('./abi.json');

const provider = ethers.getDefaultProvider("mainnet")

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
]

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
const contract = new ethers.Contract(address, ERC20_ABI, provider)


const main = async () => {
 const name = await contract.name()
 const symbol = await contract.symbol()
 const totalSupply = await contract.totalSupply()

 console.log(`Reading from ${address}`)
 console.log(`name: ${name}`)
 console.log(`symbol: ${symbol}`)
 console.log(`total supply: ${totalSupply}`)

 const balance = await contract.balanceOf('0x2fEb1512183545f48f6b9C5b4EbfCaF49CfCa6F3')
 console.log(`Balance Returned: ${ethers.formatEther(balance)}`)
}

main ()