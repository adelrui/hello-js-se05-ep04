const knex = require('./config2').knex

const id = 2
const nome = 'manuela'
const telefone = '999999912'
const jovens = {nome, telefone}

knex("contato")
.update(jovens)
.where({id})
.then(ret => {
  console.log(ret)
  process.exit(0) //para mah
})