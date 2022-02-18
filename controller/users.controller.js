const Users = require('../models/users.models');
const usersModels = require('../models/users.models');

exports.getUsers = async (req, res)=>{
    const name = req.query.name;
    await usersModels.getUsers(name, (err,data)=>{
        if(err)
            res.status(500).send({
                message: err.message || "error"
            });
        else res.json(data);
    });
};

exports.getById = async (req, res)=>{
    await usersModels.getById(req.params.id, (err,data)=>{
        if(err){
            if(err.kind === "No_encontrado"){
                res.status(404).send({
                    message: `No existe un usuario con el ID ${req.params.id}`
                });
            }else{
                res.status(500).send({
                    message: "Error al obtener el usuario con ese ID"
                });
            }
        }else{
            res.send(data);
        }
    });
};

exports.deleteUser = async (req, res)=>{
    usersModels.deleteUser(req.params.id, (err, data)=>{
        if(err){
            if(err.kind === "No_encontrado"){
                res.status(404).send({
                   message: `No se encontro usuario con el ID: ${req.params.id}` 
                });
            }else{
                res.status(500).send({
                    message: "No se puede eliminar el usuario"
                });
            }
        }else{
            res.send({message: `Usuario eliminado correctamente`});
        }
    });
};

exports.createUser=(req, res)=>{
    //validamos el usuario
    if(!req.body){
        res.status(400).send({
            message:"No puede estar vacio"
        });
    }
    //creamos el tutorial con el constructor del model
    const user = new Users({
        name: req.body.name,
        lastname: req.body.lastname,
        age: req.body.age
    });
    //guardamos el usuario
    Users.createUser(user, (err, data)=>{
        if(err)
        res.status(500).send({
            message: err.message || "Ha ocurrido algun error inesperado"
        });
        else{
            res.send(data);
        }
    });
};

