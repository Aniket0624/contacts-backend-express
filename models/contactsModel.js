const { client } = require("../config/clientDefine");

function getAllContacts() {
    return client.query('select * from contacts');
}

function getContactBy(params) {
    return client.query(` select * from contacts where lower(${params.query}) like '%${params.value}%' order by c_id;`)
}

function addNewContact(body){
    return client.query(`insert into contacts (first_name, last_name, mobile_no) values('${body.first_name}', '${body.last_name}', '+${body.mobile_no}');`)
}

function updateContact(body, params) {
    return client.query(`update contacts set ${params.query} = '${body.value}' where c_id = ${body.id} returning *;`)
}

function deleteContact(params) {
    return client.query(`delete from contacts where c_id = ${params.query} returning *`)
}

module.exports = {
    getAllContacts,
    getContactBy,
    addNewContact,
    updateContact,
    deleteContact
}