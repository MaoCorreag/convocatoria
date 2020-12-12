const mysql=require('mysql');
const {promisify}=require('util');
const {database}=require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err,connection)=>{
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DABASE CONNECTION WAS CLOSE');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            Console.error('DATABASE WAS TO MANY CONNECTIONS');
        }
        if(err.code === 'ECONNREFUSED'){
            Console.error('DATABASE CONNECTIONS WAS REFUSED');
        }
    }
    if(connection) connection.release();
        console.log('conectada');
        return;
});

pool.query = promisify(pool.query);
module.exports= pool;