const sql = require('../database');
//constructor
const Users = function(user){
    this.name = user.name;
    this.lastname = user.lastname;
    this.age = user.age;
};

Users.getUsers = (name, result)=>{
    let query = "SELECT * FROM testusers";
    if(name){
        query += ` WHERE name LIKE '%${name}%'`;
    }
    sql.query(query, (err,res)=>{
        if(err){
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("users: ", res);
        result(null, res);
    });
};

Users.getById = (id, result)=>{
    sql.query(`SELECT * FROM testusers WHERE iduser = ${id}`, (err, res)=>{
        if(err){
            console.log("error ", err);
            result(err, null);
            return;
        }
        if(res.length){
            console.log("Usuario encontrado; ", res[0]);
            result(null, res[0]);
            return;
        }
        result({kind: "No_encontrado"}, null);
    });
};

module.exports = Users;
