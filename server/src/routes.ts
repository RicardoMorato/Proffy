import express from "express";
import ClassesController from "./controllers/ClassesController";


const routes = express.Router();
const classesController = new ClassesController();

routes.get("/", (req, res) => {
  res.json({
    App: "Proffy API",
    Status: "Development",
    Author: "Ricardo Morato <https://github.com/RicardoMorato>",
  });
});

routes.post("/classes", classesController.store);
routes.get("/classes", classesController.index);

export default routes;
