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

