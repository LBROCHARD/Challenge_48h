import Router from "@koa/router";
import * as apiControllers from "#components/api/api-controllers.js";
import {
    isAuthentificatedAndResolveUser,
    isAuthentificated,isAuthentificatedAndResolveRoleUser 
} from "#middlewares/jwt-handler.js";

const api = new Router();

api.get(
    "/apiList",
    isAuthentificatedAndResolveUser,
    
);

api.get("/", apiControllers.index);
api.post("/", isAuthentificatedAndResolveUser,isAuthentificatedAndResolveRoleUser , apiControllers.create);
api.put("/:id", isAuthentificatedAndResolveUser,isAuthentificatedAndResolveRoleUser , apiControllers.update);
api.del("/:id", isAuthentificatedAndResolveUser,isAuthentificatedAndResolveRoleUser , apiControllers.destroy);

export default api;