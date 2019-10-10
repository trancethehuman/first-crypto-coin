const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// private key
const myKey = ec.keyFromPrivate('7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995cf');

// calculate your public key (which doubles as your wallet address)
const myWalletAddress = myKey.getPublic('hex');

// Create new instance of Blockchain class
const haiCoin = new Blockchain();

// Create a transaction & sign it with  key
const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
haiCoin.addTransaction(tx1);

// Mine block
haiCoin.minePendingTransactions(myWalletAddress);

// Create second transaction
const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
haiCoin.addTransaction(tx2);

// Mine block
haiCoin.minePendingTransactions(myWalletAddress);

console.log();
console.log(`Balance of xavier is ${haiCoin.getBalanceOfAddress(myWalletAddress)}`);

// haiCoin.chain[1].transactions[0].amount = 10;

// Check if the chain is valid
console.log();
console.log('Blockchain valid?', haiCoin.isChainValid() ? 'Yes' : 'No');