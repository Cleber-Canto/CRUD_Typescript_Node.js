import { Router } from "express";
import { CreateCategoryController } from "./controller/CreateCategoryController";
import { CreateVideoController } from "./controller/CreateVideoController";
import { DeleteCategoryController } from "./controller/DeleteCategoryController";
import { DeleteVideoController } from "./controller/DeleteVideoController";
import { GetAllCategoriesController } from "./controller/GetAllCategoriesController";
import { GetAllVideosController } from "./controller/GetAllVideosController";
import { UpdateCategoryController } from "./controller/UpdateCategoryControler"; 
import { UpdateVideoController } from "./controller/UpdateVideoController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);
routes.delete("/videos/:id", new DeleteVideoController().handle);
routes.put("/videos/:id", new UpdateVideoController().handle);

export { routes };