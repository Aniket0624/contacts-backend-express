const { Client } = require('pg')
const client = new Client({
    user: 'postgres',
    password: 'test1234',
    host: 'localhost',
    port: 5432,
    database: 'contact_list',
});

module.exports = {
    client
}