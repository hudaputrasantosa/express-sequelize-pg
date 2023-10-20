const express = require("express");
const router = express.Router();
const userController = require("../controllers").userController;

// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });
router.get("/check", (req, res) => {
  res.send("Router berhasil");
});
router.get("/users", userController.list);
router.get("/user/:id", userController.getById);
router.post("/user", userController.add);
router.put("/user/:id", userController.update);
router.delete("/user/:id", userController.delete);

module.exports = router;
