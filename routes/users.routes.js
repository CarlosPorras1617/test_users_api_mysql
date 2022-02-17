const router = require("express").Router();
const usersController = require('../controller/users.controller');

router.get('/',usersController.getUsers);
router.get("/:id", usersController.getById);
router.delete("/:id", usersController.deleteUser);

module.exports = router;