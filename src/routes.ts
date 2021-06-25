import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { TagController } from "./controllers/TagController";
import { ensureAdmin } from "./midlewares/ensureAdmin";
import { AuthenticatedUserController } from "./controllers/AuthenticatedUserController";
import { ComplimentController } from "./controllers/ComplimentController";
import { ensureAuthenticated } from "./midlewares/ensureAuthenticated";


const router = Router();

const userController = new UserController();
const tagController = new TagController();
const authenticatedUserController = new AuthenticatedUserController();
const complimentController = new ComplimentController();

router.post("/user", userController.handle);
router.post("/login", authenticatedUserController.handle);
router.post("/tag", ensureAuthenticated, ensureAdmin, tagController.handle);
router.post("/compliment", ensureAuthenticated, complimentController.handle);
router.get("/compliments/send", ensureAuthenticated, complimentController.handleListSender);
router.get("/compliments/receiver", ensureAuthenticated, complimentController.handleListReceiver);
router.get("/tags", ensureAuthenticated, ensureAdmin, tagController.handleListTags);
router.get("/users", ensureAuthenticated, ensureAdmin, userController.handleListTags );

export { router };