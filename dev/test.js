const Blockchain = require('./blockchain')

const bitcoin = new Blockchain()
bitcoin.createNeWBlock(2389, 'oni34piojkj', '283jy87r9erury')

bitcoin.createNewTransactions(100, 'JOHNjwhewi22', 'DOE76bytr76t')
bitcoin.createNeWBlock(2123, 'ji32k14k5hvb354', '2lopji09d8h')
bitcoin.createNewTransactions(50, 'JOHNjwhewi22', 'DOE76bytr76t')
bitcoin.createNewTransactions(450, 'JOHNjwhewi22', 'DOE76bytr76t')
bitcoin.createNewTransactions(300, 'JOHNjwhewi22', 'DOE76bytr76t')
bitcoin.createNeWBlock(1234, 'oni34piojkj', '283jy87r9erury')



console.log(bitcoin.chain[2])