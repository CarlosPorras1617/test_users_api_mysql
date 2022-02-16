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

module.exports = Users;
