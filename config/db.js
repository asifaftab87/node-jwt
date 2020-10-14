let mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit:10,
    password: 'root',
    user: 'root',
    database: 'node1',
    host: 'localhost',
    port: '3306'
});

/*
let node1DB = {};

node1DB.all = () => {

    return new Promise((resolve, reject) => {

        pool.query(`select * from employee`, (err, results) => {

            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

node1DB.one = (id) => {

    return new Promise((resolve, reject) => {

        pool.query(`select * from employee where id = ?`, [id], (err, results) => {

            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};
*/


//module.exports = node1DB;

module.exports = pool;