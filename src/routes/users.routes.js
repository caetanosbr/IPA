const { Router } = require("express");

const usersController = require("../controllers/UsersController");

const usersRoutes = Router();

const UserController = new usersController();

usersRoutes.post("/", usersController.create);

module.exports = usersRoutes;
