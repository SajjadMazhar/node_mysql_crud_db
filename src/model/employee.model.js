'use strict';
var dbConn = require("../../config/db.config")

var Employee = employee =>{
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
};

Employee.create = (newEmp, result)=>{
    dbConn.query("insert into employees set?", newEmp, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
        
        }else{
            console.log(res.inseertId);
            result(null, res.insertId);
        }
        
    });
};

Employee.findById = (id, result)=>{
    dbConn.query("select * from employee where id=?", id, (err,res)=>{
        if(err){
            console.log("error: ",err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
}

Employee.findAll = (result)=>{
    dbConn.query("select * from employees", (err, rse)=>{
        if(err){
            console.log("error: ", err)
            result(null,err)
        }else{
            console.log("employee: ", res)
            result(null, res)
        }
    });
}

Employee.update = (id, employee, result)=>{
    dbConn.query("update employees set first_name=?, last_name=?, phone=?, organization=?, designation=?, salary=?,where id=?", [employee.first_name, employee.last_name, employee.email, employee.phone, employee.organization, employee.designation, employee.salary,id], (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res)
        }
    });
};

Employee.delete = (id, result)=>{
    dbConn.query("delete from employees where id = ?", [id], (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(null, err)
        }else{
            result(null, res);
        }
    });
};

module.exports = Employee;