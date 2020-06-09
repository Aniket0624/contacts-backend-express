const { client } = require("../config/clientDefine");

async function table_creation(tableName) {
    await client.connect();

    await client.query(`DROP TABLE IF EXISTS ${tableName} CASCADE`);
    await client.query(`create table ${tableName}(c_id SERIAL PRIMARY KEY, first_name varchar(100), last_name varchar(100), mobile_no varchar(200));`);
    
    await client.end();
}

table_creation('contacts');