import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import {
    ListUserReceiveComplimentsController
} from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const routes = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();

routes.post("/users", createUserController.handle);
routes.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
routes.post("/login", authenticateUserController.handle);
routes.post("/compliments", ensureAuthenticated, createComplimentController.handle);
routes.get(
    "/users/compliments/send",
    ensureAuthenticated,
    listUserSendComplimentsController.handle
);
routes.get(
    "/users/compliments/receive",
    ensureAuthenticated,
    listUserReceiveComplimentsController.handle
);
routes.get("/tags", ensureAuthenticated, listTagsController.handle);

export { routes };
