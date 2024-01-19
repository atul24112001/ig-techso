import { Router } from "express";
import checkAccess from "../middlewares/checkAccess.js";
import { addTutorials, deleteTutorials, getTutorials, updateTutorials } from "../controllers/tutorial.js";

const tutorialRouter = Router();

tutorialRouter.get("/", getTutorials);
tutorialRouter.post("/", checkAccess, addTutorials);
tutorialRouter.patch("/:id", checkAccess, updateTutorials);
tutorialRouter.delete("/:id", checkAccess, deleteTutorials);

export default tutorialRouter;