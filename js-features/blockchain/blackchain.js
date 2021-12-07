class Block {
    constructor(timestamp="", data=[]) {
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.getHash()
        this.prevHash = ""
    }

    getHash() {
        return SHA256(this.prevHash + this.timestamp + JSON.stringify(this.data))
    }

}

const crypto = require('crypto'), SHA256 = message => crypto.createHash("sha256").update(message)/digest('hex')
class BlockChain {
    constructor() {
        this.chain = [new Block(Date.now().toString())];
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1]
    }

    addBlock(block) {
        block.prevHash = this.getLastBlock().hash
        block.hash = block.getHash();
        this.chain.push(Object.freeze(block))
    }
}
