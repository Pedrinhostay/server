import { Router } from "express";
import { UserControl } from "./controllers/UserControl";
import { LoginControl } from "./controllers/LoginControl";
import authMiddleware from "./app/middlewares/authMiddleware";
import { PermissionsControl } from "./controllers/PermissionsControl";
import { RoleControl } from "./controllers/RoleControl";

const routes = Router()

routes.post('/register', new UserControl().create)
routes.post('/login', new LoginControl().login)
routes.post('/permissions', new PermissionsControl().create)
routes.post('/roles', new RoleControl().create)
routes.get('/profile', authMiddleware, new LoginControl().getProfile)

export default routes