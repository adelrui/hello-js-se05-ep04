const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './mybank.db'
    },
    useNullAsDefault: true
})

module.exports = {knex}