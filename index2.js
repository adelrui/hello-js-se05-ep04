const knex = require('./config').knex

const zagueiro = {
    numerojogador: 3,
    nomejogador: 'Junior Bahiano'
}

knex('jogador')
.insert(zagueiro)
.then(ret =>{
    console.log(ret)
    process.exit(0)
})