const { Router } = require("express");
const userController = require("../controllers").userController;

Router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

Router.get("/api/user", userController.list);
Router.get("/api/user/:id", userController.getById);
Router.post("/api/user", userController.add);
Router.put("/api/user/:id", userController.update);
Router.delete("/api/user/:id", userController.delete);

module.exports = Router;
