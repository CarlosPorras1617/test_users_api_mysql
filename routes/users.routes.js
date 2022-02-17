const router = require("express").Router();
const usersController = require('../controller/users.controller');

router.get('/',usersController.getUsers);
router.get("/:id", usersController.getById);

module.exports = router;