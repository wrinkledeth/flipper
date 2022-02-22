import { ethers } from 'ethers';
require("dotenv").config();

const url = process.env.ROPSTEN_NODE_API_URL as string;
const provider = new ethers.providers.JsonRpcProvider(url);
const privateKey = process.env.ROPSTEN_PRIVATE_KEY as string;
const wallet = new ethers.Wallet(privateKey, provider)

const owner = wallet.address;

const contractAddress = "0x8cCF14761D0db046DEc915afC053a4F9518A85b0"

// The Contract interface
let abi = [
    // "event ValueChanged(address indexed author, string oldValue, string newValue)",
    "constructor(bool value)",
    "function get() view returns (bool value)",
    "function flip()"
];

let contract = new ethers.Contract(contractAddress, abi, provider);
let contractWithSigner = contract.connect(wallet);
// let contractWithSigner = new Contract(contractAddress, abi, wallet)

const getBit = async () => {
    let currentValue = await contract.get();
    console.log(currentValue);
}

const getBalance = async (address:string) => {
    let weiBalance = await provider.getBalance(address);
    let ethBalance = ethers.utils.formatEther(weiBalance);
    return Number(ethBalance);
}

const flipBit = async () => {
    const startGas = await getBalance(owner);
    let oldValue = await contract.get()
    console.log(`Current Value: ${oldValue}`);
    let tx = await contractWithSigner.flip();
    console.log(tx.hash);
    await tx.wait();
    let newValue = await contract.get();
    console.log(`New Value: ${newValue}`);
    const endGas = await getBalance(owner);
    let gasSpent = startGas - endGas
    console.log(`Gas Spent: ${gasSpent}`);
}

flipBit()




