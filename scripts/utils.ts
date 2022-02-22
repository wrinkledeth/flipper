require("dotenv").config();
import { BigNumber, ethers } from "ethers";
const fs = require("fs");
const { Client, Intents } = require('discord.js');

// login to discord
let discord:any;
let discordReady = false;

// log output and error message in a discord server
export function log(message: string) {
  // inner send message method
  const sendMessage = () => {
    const channel = discord.channels.cache.get(process.env.DISCORD_CHANNEL);
    if (channel) {
      channel.send("```" + message + "```");
    } else {
      // retry after 5 seconds
      setTimeout(() => {
        try {
          const channel = discord.channels.cache.get(process.env.DISCORD_CHANNEL);
          // console.log(process.env.DISCORD_CHANNEL)
          channel.send("```" + message + "```");
        } catch {}
      }, 10000);
    }
  }
  // initiate discord if needed
  if (!discordReady) {
    discord = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
    discord.login(process.env.DISCORD_KEY);
    discord.on("ready", () => {
      discordReady = true;
      sendMessage();
    })
  } else {
    sendMessage();
  }
}


// setup and return a router based on address
export function getRouter(address: string, wallet: ethers.Wallet) {
  // setup the sushiswap contract
  return new ethers.Contract(
    address,
    [
      "function WETH() external pure returns (address)",
      "function swapExactETHForTokens(uint amountoutmin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)",
      "function getAmountsOut(uint amountin, address[] memory path) public view returns (uint[] memory amounts)",
      "function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path,address to,uint deadline) external returns (uint[] memory amounts)",
      "function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)",
      "function swapExactTokensForTokensSupportingFeeOnTransferTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external",
    ],
    wallet
  );
}

export const swapTokensForTokens = async (amountIn: BigNumber, path: string[], router: ethers.Contract, wallet: ethers.Wallet) => {

  // get wallet token balance
  const token = getToken(path[0], wallet);

  // approve the router to spend tokens 
  // you can use balance to approve the exact amount or use Number.MAX_VALUE for infinite approval
  let tx = await token.approve(router.address, amountIn);
  // tx = await token.approve(router.address, Number.MAX_VALUE);
  await tx.wait();

  // make TOKEN -> TOKEN swap
  tx = await router.swapExactTokensForTokens(
    amountIn,
    0,
    path,
    wallet.address,
    Math.floor(Date.now() / 1000) + 60 * 20,
    {gasPrice: 1 * 1e9, gasLimit: 500000}
  );

  // wait for tx to finish
  await tx.wait();
}

export const swapETHForTokens = async (amountIn: BigNumber, tokenAddress: string, router: ethers.Contract, wallet: ethers.Wallet) => {
  // make ETH -> TOKEN swap
  // TODO: dynamically get ETH address
  let tx = await router.swapExactETHForTokens(
    0,
    ['0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB', tokenAddress],
    wallet.address,
    Math.floor(Date.now() / 1000) + 60 * 20,
    {value: amountIn, gasPrice: 1 * 1e9, gasLimit: 500000}
  );

  // wait for tx to finish
  await tx.wait();
}

export const swapTokensForETH = async (amountIn: BigNumber, tokenAddress: string, router: ethers.Contract, wallet: ethers.Wallet) => {

  // get wallet token balance
  const token = getToken(tokenAddress, wallet);

  // approve the router to spend tokens 
  // you can use balance to approve the exact amount or use Number.MAX_VALUE for infinite approval
  let tx = await token.approve(router.address, amountIn);
  // tx = await token.approve(router.address, Number.MAX_VALUE);
  await tx.wait();

  // make TOKEN -> ETH swap
  tx = await router.swapExactTokensForETH(
    amountIn,
    0,
    [tokenAddress, '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB'],
    wallet.address,
    Math.floor(Date.now() / 1000) + 60 * 20,
    {gasPrice: 1 * 1e9, gasLimit: 500000}
  );

  await tx.wait();
}




// setup and return a factory based on address
export function getFactory(address: string, wallet: ethers.Wallet) {
    // setup the factory contract 
    return new ethers.Contract(
      address,
      [
        "function getPair(address tokenA, address tokenB) external view returns (address pair)",
        "function allPairsLength() external view returns (uint)",
        "function allPairs(uint) external view returns (address pair)",
        "event PairCreated(address indexed token0, address indexed token1, address pair, uint)",
      ],
      wallet
    );
}

// setup and return an ERC20 token based on address
export function getToken (address: string, wallet: ethers.Wallet) {
  // setup the sushiswap contract
  return new ethers.Contract(
    address,
    [
        "function symbol() public view returns (string memory)",
        "function name() public view returns (string memory)",
        "function decimals() public view returns (uint8)",
        "function allowance(address owner, address spender) public view returns (uint256)",
        "function approve(address spender, uint256 amount) public returns (bool)",
        "function transfer(address recipient, uint256 amount) public returns (bool)",
        "function balanceOf(address account) public view returns (uint256)"
    ],
    wallet
  );
}

// setup and return a uniV2-style pair based on address
export function getPair (address: string, wallet: ethers.Wallet) {
  // setup the pair contract
  return new ethers.Contract(
    address,
    [
        "function name() external pure returns (string memory)",
        "function symbol() external pure returns (string memory)",
        "function token0() external view returns (address)",
        "function token1() external view returns (address)",
        "function factory() external view returns (address)",
        "function totalSupply() external view returns (uint)",
        "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
        "event Swap(address indexed sender, uint amount0In, uint amount1In, uint amount0Out, uint amount1Out, address indexed to)",
        "event Transfer(address indexed from, address indexed to, uint value)",
        "event Sync(uint112 reserve0, uint112 reserve1)"
    ],
    wallet
  );
}

// wait function
export async function wait(milliseconds: number) {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
}

// save an object to file
export async function saveObject (fileName: string, data: Object) {
    try {
        // save/load file directory 
        const path = `./output/${fileName}`;
        // save new tokens object
        fs.writeFileSync(path, JSON.stringify(data, null, 2));
    } catch (err) {
        console.log("saving error")
    }
}

// load an object from file
export async function loadObject (fileName: string) {
    try {
        // read data from file
        const path = `./output/${fileName}`;
        const data = fs.readFileSync(path, {encoding: 'utf8'});
        // return JSON 
        return(JSON.parse(data));
    } catch (err) {
        console.log("loading error");
        console.log(err);
        return({});
    }
}