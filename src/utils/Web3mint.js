// import contract from "../contracts/bithuabi.json";
import { ethers } from "ethers";
import { isMetaMaskInstalled, ethereum } from "../config";
import react, { useState, useEffect } from "react";
// import ABI from "../abis/BithuContract.json";

export const mint = async (mint_amount) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  await provider.send("eth_requestAccounts", []);
  const signed = provider.getSigner();

  console.log(signed);

  const metadata =
    "ipfs://bafyreiatv2m3rs4qbu43hu2jqfdzqem6acirj3k7l5ihpvsvrtsajo65yi/metadata.json";
  const user = await signer.getAddress();
  const address = "0x33BFc30CB6c0AB4e863bAf6C85a1F292aB7b7795";
  let contract = new ethers.Contract(address, ABI, signer);
  let transaction = await contract.mint(user, metadata).wait;
  let tx = await transaction.wait();
  const receipt = await tx.wait();

  if (isMetaMaskInstalled()) {
    console.log("hi there");
    const provider = new ethers.providers.Web3Provider(ethereum);
    console.log(provider);

    const signer = provider.getSigner();
    const contractAddress = "0x33BFc30CB6c0AB4e863bAf6C85a1F292aB7b7795";
    const nftContract = new ethers.Contract(contractAddress, contract, signer);
    let txnHash = await nftContract.mint(
      ethereum.selectedAddress,
      mint_amount,
      {
        gasLimit: "285000",
        value: ethers.utils.parseEther((0.03 * mint_amount).toString()),
      }
    );
    return txnHash;
  }
};

export const totalMintCount = async () => {
  if (isMetaMaskInstalled()) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contractAddress = "0x9FD56e423c9f0C01D4d011ad30860962ddaeA51D";
    const nftContract = new ethers.Contract(contractAddress, contract, signer);

    let totalMint = await nftContract.count();

    return totalMint;
  }
};
