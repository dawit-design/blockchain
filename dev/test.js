const Blockchain = require('./blockchain')

const bitcoin = new Blockchain()
bitcoin.createNeWBlock(2389, 'oni34piojkj', '283jy87r9erury')
bitcoin.createNeWBlock(1234, 'oni34piojkj', '283jy87r9erury')
bitcoin.createNeWBlock(2123, 'ji32k14k5hvb354', '2lopji09d8h')

console.log(bitcoin)