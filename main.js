class Block{
    constructor(index, timestamp, data, previousHash=''){
        //index: each block has an index in the blockchain, tells us where the block sits
        //timestamp: when the block was created
        //data: details of the transaction are stored here
        //previousHash: Hash values of the block before
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = '';
    }

    calculateHash() {
        //Takes the properties of a block, run it through a Hash creator.
    }
}