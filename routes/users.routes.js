const router = require("express").Router();
const usersController = require('../controller/users.controller');

router.get('/',usersController.getUsers);

module.exports = router;