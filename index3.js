const knex = require('./config').knex

const idjogador = 16
const numerojogador = 32
const nomejogador = 'Mario Cortella'

knex("jogador")
.update({numerojogador, nomejogador})
.where({idjogador})
.then(ret => {
  console.log(ret)
  process.exit(0) //para mah
})