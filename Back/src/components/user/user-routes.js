import Router from "@koa/router";
import * as UserControllers from "#components/user/user-controllers.js";
import { isAuthentificatedAndResolveUser } from "#middlewares/jwt-handler.js";
const users = new Router();

users.post("/register", UserControllers.register);
users.post("/login", UserControllers.login);
users.put("/:id", isAuthentificatedAndResolveUser, UserControllers.update);
users.get("/me", isAuthentificatedAndResolveUser, (ctx) => {
    ctx.ok({ user: ctx.state.user.nom, email: ctx.state.user.email, role: ctx.state.user.role, id: ctx.state.user.id});
});
users.get("/get/:id",UserControllers.index);

export default users;