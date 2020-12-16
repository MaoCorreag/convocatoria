const mysql=require('mysql');
const {database}=require('./keys');

const connection = mysql.createConnection(database);
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
