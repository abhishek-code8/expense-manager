const expenseClass = require('./expense');
db = require('../../../db.json');

const fs = require('fs');
const e = require('express');
const { resolve } = require('path');
const { rejects } = require('assert');


const displayAll = ()=>{
    return new Promise((resolve)=>{
       resolve({message:"List of expenses",Expenses:db,status:200})
    })
}

const getDate = (dateString) =>{
    list = dateString.split('/');
    //console.log(list);
    return new Date(list[2],list[1]-1,list[0]);
}





const createRecord = (expenseParam) =>{
    return new Promise((resolve,reject)=>{
        let NewExpenseRecord = new expenseClass(expenseParam.title,
            expenseParam.description,
            expenseParam.category,
            expenseParam.amount,
            expenseParam.expenseDate);
        db.push(NewExpenseRecord);
        fs.writeFileSync("server/db.json", JSON.stringify(db,null,2), err => {          

            resolve({message:"List Obtained",added:expenseParam,status:201}); // Success 
                      
        }); 
    })
}

const updateRecord = (expenseParam) =>{
    return new Promise((resolve,reject)=>{
        db.map((ele)=>{if(ele.id=== expenseParam.id){
            ele.title=expenseParam.title;
            ele.category=expenseParam.category;
            ele.description=expenseParam.description;
            ele.amount=expenseParam.amount;
            ele.expenseDate=expenseParam.expenseDate;
        }})
        fs.writeFileSync("server/db.json",JSON.stringify(db,null,2),err=>{

                resolve({message:"Update",updated:expenseParam,status:200})
            
        })
    })
}

const deleteRecord = (expenseParam) =>{
    return new Promise((resolve,reject)=>{
        NewDb = db.filter((ele)=>{return(ele.id !== expenseParam.id)
            
        })
        fs.writeFile("server/db.json",JSON.stringify(NewDb,null,2),err=>{
            if(err){reject({message:err})}
            else{
                resolve({message:"Update",deleted:expenseParam,status:200})
            }
        })
    })
}

const searchByDate = (param)=>{
    return new Promise((resolve)=>{
        if(param.endDate==null){
            NewDb = db.filter((ele)=>{
                return ele.expenseDate>param.startDate;
            })
            resolve({message:"Success",Result:NewDb,status:200})           
            
        }else{
            NewDb = db.filter((ele)=>{
                return (getDate(ele.expenseDate)>getDate(param.startDate) && 
                getDate(ele.expenseDate)<getDate(param.endDate))
            })
        }
        
    })
}


module.exports = {
    deleteRecord,
    searchByDate,
    createRecord,
    updateRecord,
    displayAll,getDate
}
















//let expenseParam = {
    //     "title":"le lo",
    //     "description":"trimmer",
    //     "category":"joke",
    //     "amount":"400",
    //     "expenseDate":"2020/02/21"
    // };