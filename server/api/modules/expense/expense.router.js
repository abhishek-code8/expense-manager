const router = require('express').Router();
const { response } = require('../../../..');
const expenseDao = require('./expenseDao');
const expenseClass = require('./expense');
//db = require('../../../db.json');
const fs = require('fs');
const e = require('express');
const { resolve } = require('path');
const { rejects } = require('assert');

// write all routing code and logic here


const getDate = (dateString) =>{
    list = dateString.split('/');
    //console.log(list);
    return new Date(list[2],list[1]-1,list[0]);
}

router.get('/',async(req,res)=>{

        await expenseDao.displayAll().then((response)=>{
        res.status(response.status).send(response);
        });
})


router.post('/',(req,res)=>{
    fs.readFile('server/db.json', (err, data) => {
        if (err) throw err;
        let newarray= JSON.parse(data);
    let NewExpenseRecord = new expenseClass(req.body.title,
        req.body.description,
        req.body.category,
        req.body.amount,
        req.body.expenseDate);
    newarray.push(NewExpenseRecord);
     fs.writeFile("server/db.json", JSON.stringify(newarray,null,2), err => { 
        if(err) throw err;
        res.status(201).send("Expense is added successfully");
    }); 
})
})


router.post('/update',(req,res)=>{
    fs.readFile('server/db.json', (err, data) => {
        if (err) throw err;
        let db= JSON.parse(data);
        db.map((ele)=>{if(ele.id=== req.body.id){
            ele.title=req.body.title;
            ele.category=req.body.category;
            ele.description=req.body.description;
            ele.amount=req.body.amount;
            ele.expenseDate=req.body.expenseDate;
        }})
        fs.writeFile("server/db.json", JSON.stringify(db,null,2), err => { 
            if(err) throw err;
            res.status(201).send("Update is added successfully");
        }); 

})
})


router.delete('/delete',(req,res)=>{
    fs.readFile('server/db.json', (err, data) => {
        if (err) throw err;
        let db= JSON.parse(data);
        NewDb = db.filter((ele)=>{console.log(ele.id !== req.body.id);return(ele.id !== req.body.id)})
        fs.writeFile("server/db.json", JSON.stringify(NewDb,null,2), err => { 
            if(err) throw err;
            res.status(200).send("Delete is successfully");
        });    
})
})


router.post('/search',(req,res)=>{
    fs.readFile('server/db.json', (err, data) => {
        if (err) throw err;
        let db= JSON.parse(data);
        let Newdb;
        if(req.body.endDate==null){
            Newdb = db.filter((ele)=>{
                return (getDate(ele.expenseDate)<getDate(req.body.startDate))
            })
            res.status(200).send({message:"List is",List:Newdb});

        }
        else{
            Newdb = db.filter((ele)=>{
                return (getDate(ele.expenseDate)>getDate(req.body.startDate) && 
                getDate(ele.expenseDate)<getDate(req.body.endDate))
            })
            res.status(200).send({message:"List is",List:Newdb});
        }
        
        
})
})

router.post('/category',(req,res)=>{
    fs.readFile('server/db.json', (err, data) => {
        if (err) throw err;
        let db= JSON.parse(data);
        let Newdb;
        if(req.body.endDate==null){
            Newdb = db.filter((ele)=>{
                return (getDate(ele.expenseDate)<getDate(req.body.startDate)&& ele.category===req.body.category)
            })
            res.status(200).send({message:"List is",List:Newdb});

        }
        else{
            Newdb = db.filter((ele)=>{
                return (getDate(ele.expenseDate)>getDate(req.body.startDate) && 
                getDate(ele.expenseDate)<getDate(req.body.endDate)
                && ele.category===req.body.category)
            })
            res.status(200).send({message:"List is",List:Newdb});
        }
        
        
})
})

module.exports = router;