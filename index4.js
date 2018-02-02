const knex = require('./config').knex

knex('jogador')
.select()
.where('numerojogador' , 11)
.then(ret => {
    console.log(ret)
    process.exit(0) // finalizar excução
})