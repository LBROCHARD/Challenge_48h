import Router from "@koa/router";
import * as commandeControllers from "#components/commande/commande-controllers.js";

import {
    isAuthentificatedAndResolveUser,
    isAuthentificated,isAuthentificatedAndResolveRoleUser 
} from "#middlewares/jwt-handler.js";

const commande = new Router();

commande.get(
    "/myorders",
    isAuthentificatedAndResolveUser,
    commandeControllers.getMyOrders
);
commande.post("/", isAuthentificatedAndResolveUser , commandeControllers.create);
commande.del("/:id", isAuthentificatedAndResolveUser, commandeControllers.destroy);

export default commande;