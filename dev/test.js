const Blockchain = require('./blockchain')

const bitcoin = new Blockchain()

const previousBlockHash = 'jahsjahshajhs';
const currentBlockData = [
    {
        amount: 10,
        sender: 'nueo3uh34u34u3',
        recipient: 'oqu39hjeyuyeuh'
    },
    {
        amount: 30,
        sender: 'hwury34u34u3',
        recipient: 'lworwjeyuyeuh'
    },
    {
        amount: 200,
        sender: 'zawse4u34u3',
        recipient: '12930freh9hjeyuyeuh'
    }
]
const nonce = 100
// bitcoin.createNeWBlock(2389, 'oni34piojkj', '283jy87r9erury')

// bitcoin.createNewTransactions(100, 'JOHNjwhewi22', 'DOE76bytr76t')
// bitcoin.createNeWBlock(2123, 'ji32k14k5hvb354', '2lopji09d8h')
// bitcoin.createNewTransactions(50, 'JOHNjwhewi22', 'DOE76bytr76t')
// bitcoin.createNewTransactions(450, 'JOHNjwhewi22', 'DOE76bytr76t')
// bitcoin.createNewTransactions(300, 'JOHNjwhewi22', 'DOE76bytr76t')
// bitcoin.createNeWBlock(1234, 'oni34piojkj', '283jy87r9erury')



console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce))