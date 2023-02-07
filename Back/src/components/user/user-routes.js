import Router from "@koa/router";
import * as UserControllers from "#components/user/user-controllers.js";
import { isAuthentificatedAndResolveUser } from "#middlewares/jwt-handler.js";
const users = new Router();

users.post("/register", UserControllers.register);
users.post("/login", UserControllers.login);
users.put("/:id", isAuthentificatedAndResolveUser, UserControllers.update);
users.get("/me", isAuthentificatedAndResolveUser, (ctx) => {
    ctx.ok({ message: "My Profile", user: ctx.state.user.nom });
});

export default users;