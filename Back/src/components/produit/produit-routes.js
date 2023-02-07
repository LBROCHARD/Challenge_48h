import Router from "@koa/router";
import * as produitControllers from "#components/produit/produit-controllers.js";

import {
    isAuthentificatedAndResolveUser,
    isAuthentificated,isAuthentificatedAndResolveRoleUser 
} from "#middlewares/jwt-handler.js";

const produit = new Router();


produit.get("/:id", produitControllers.id);
produit.get("/", produitControllers.index);
produit.post("/", isAuthentificatedAndResolveUser,isAuthentificatedAndResolveRoleUser , produitControllers.create);
produit.put("/:id", isAuthentificatedAndResolveUser,isAuthentificatedAndResolveRoleUser , produitControllers.update);
produit.del("/:id", isAuthentificatedAndResolveUser,isAuthentificatedAndResolveRoleUser , produitControllers.destroy);

export default produit;