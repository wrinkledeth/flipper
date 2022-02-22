import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useState, useEffect } from "react";
import PrimaryButton from "../components/primary-button";
import abi from "../utils/Flipper.json"
import { ethers } from "ethers";

declare var window: any
declare var ethereum: any

const Home: NextPage = () => {
  // USE STATE
  const [ethereum, setEthereum] = useState(undefined) as any; 
  const [connectedAccount, setConnectedAccount] = useState(undefined) as any;
  const [bit, setBit] = useState(undefined) as any;

  const contractAddress = '0x42Cc4682bB4B34A4f0996b0fae09Ec9fDc972562';
  const contractABI = abi.abi

  const handleAccounts = (accounts:string[]) => {
    if (accounts.length > 0) {
      const account = accounts[0];
      console.log('We have an authorized account: ', account);
      setConnectedAccount(account);
    } else {
      console.log("No authorized accounts yet")
    }
  };
  
  const getConnectedAccount = async () => {
    console.log("getConnectedAccount");
    if (window.ethereum) {
      setEthereum(window.ethereum); //porived by metamask
    }
  
    if (ethereum) {
      // requests the accounts from metamask
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      handleAccounts(accounts);
    }

  };
  useEffect(() => {
    getConnectedAccount();
  }, []);
  
  const connectAccount = async () => {
    console.log('connectAccount');
    if (!ethereum) {
      alert('MetaMask is required to connect an account');
      return;
    }
  
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    handleAccounts(accounts);
  };

  const getBit = async () => {
    if (ethereum && connectedAccount) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const flipperContract = new ethers.Contract(contractAddress, contractABI, signer);
      const bit = await flipperContract.get();
      console.log('Bit state retrieved', bit);
      setBit(bit);
    }
  }
  useEffect(() => {
    getBit();
  },[connectedAccount])

  const flipBit = async (e) => {
    e.preventDefault();

    if (!ethereum) {
      console.error('Ethereum object is required to Flip');
      return;
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const flipperContract = new ethers.Contract(contractAddress, contractABI, signer);

    const flipTx = await flipperContract.flip();
    console.log('Flip transaction started...', flipTx.hash);

    await flipTx.wait();
    console.log('Bit Flipped!', flipTx.hash);

    await getBit();
  }

  // RETURNS
  if (!ethereum) {
    return <p>Please install MetaMask to connect to this site</p>
  }

  if (!connectedAccount) {
    return <PrimaryButton onClick={connectAccount}>Connect MetaMask Wallet</PrimaryButton>
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Flipper!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p className={styles.description}>
          Connected Account: {' '}
          <code className={styles.code}>{connectedAccount}</code>
        </p>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Flipper!</a>
        </h1>


        <h1 className={styles.title}>
          Bit = {String(bit).toUpperCase()}
        </h1>

        <div className="flex flex-col gap-y-8">
        <PrimaryButton type="submit" onClick={flipBit}>
          Flip!
        </PrimaryButton>
        </div>
      </main>
      
      <footer className={styles.footer}>
        Wrinkled Labs
      </footer>
    </div>
  )
}

export default Home


// Unhandled Runtime Error
// Error: transaction failed (transactionHash="0xfb53dbcabf341453254734a708ae3c6c5e6275480a00fb15809ea81196a89690", transaction={"hash":"0xfb53dbcabf341453254734a708ae3c6c5e6275480a00fb15809ea81196a89690","type":2,"accessList":null,"blockHash":null,"blockNumber":null,"transactionIndex":null,"confirmations":0,"from":"0x86030bf0545f35FEfEDef390D03Bf6005B936974","gasPrice":{"type":"BigNumber","hex":"0x59682f0c"},"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f0c"},"gasLimit":{"type":"BigNumber","hex":"0x787f"},"to":"0x42Cc4682bB4B34A4f0996b0fae09Ec9fDc972562","value":{"type":"BigNumber","hex":"0x00"},"nonce":5,"data":"0xcde4efa9","r":"0x33c3eb9c767ce93c883761c707efd916a01e580e907500debeac28a0146873ef","s":"0x2e38d28c47c5499ba7b3fab31f7fb50c0425e044b9d8be9c8f82ae3e38cc70d5","v":0,"creates":null,"chainId":0}, receipt={"to":"0x42Cc4682bB4B34A4f0996b0fae09Ec9fDc972562","from":"0x86030bf0545f35FEfEDef390D03Bf6005B936974","contractAddress":null,"transactionIndex":49,"gasUsed":{"type":"BigNumber","hex":"0x787f"},"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","blockHash":"0xd3fa9ae227590ccfe1b0e22c95ae54eddf8a24a48cff0f4e47934692c5d4b038","transactionHash":"0xfb53dbcabf341453254734a708ae3c6c5e6275480a00fb15809ea81196a89690","logs":[],"blockNumber":12001317,"confirmations":1,"cumulativeGasUsed":{"type":"BigNumber","hex":"0x5a9209"},"effectiveGasPrice":{"type":"BigNumber","hex":"0x59682f09"},"status":0,"type":2,"byzantium":true}, code=CALL_EXCEPTION, version=providers/5.5.3)