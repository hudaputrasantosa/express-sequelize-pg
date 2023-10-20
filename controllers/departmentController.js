const Department = require("../models/department").Department;
const User = require("../models/user").User;
const Project = require("../models/project").Project;

module.exports = {
  list(req, res) {
    return Department.findAll({
      include: [],
      order: ["createdAt", "DESC"],
    })
      .then((data) => res.status(200).send(data))
      .catch((error) => res.status(400).send(error));
  },

  getById(req, res) {
    return Department.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "users",
        },
        {
          model: Project,
          as: "projects",
        },
      ],
    })
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "department not found",
          });
        }
        return res.status(200).send(data);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Department.create({
      id: req.body.id,
      department_head: req.body.department_head,
      department_description: req.body.department_description,
    })
      .then((data) => res.status(201).send({ message: "Succes Created" }))
      .catch((err) => res.status(400).send(err));
  },
};
