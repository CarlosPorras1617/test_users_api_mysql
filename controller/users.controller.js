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
}

