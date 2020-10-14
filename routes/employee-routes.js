const express = require('express');

const employeeRouter = express.Router();

const employRepo = require('../repository/employee-repository')

employeeRouter.get('/employee', async (req, res, next) => {

    console.log("this is employee routes......")

    try{
        let results = await employRepo.all();
        res.json(results);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});

module.exports = employeeRouter;