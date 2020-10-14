const dbPool = require('../config/db')

let employRepo = {};

employRepo.all = () => {

    return new Promise((resolve, reject) => {

        dbPool.query(`select * from employee`, (err, results) => {

            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = employRepo