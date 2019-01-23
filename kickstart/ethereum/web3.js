import HDWalletProvider from 'truffle-hdwallet-provider';
import Web3 from 'web3';

const provider = new HDWalletProvider(
    'grocery lizard dinner economy soccer arrange attract abandon item congress embrace explain',
    'https://rinkeby.infura.io/v3/b81f3367240c4369b838f2cd262045e3'
);

const web3 = new Web3(provider);

export default web3;
