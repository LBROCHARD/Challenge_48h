import CommandeModel from "#components/commande/commande-model.js";


import Joi from "Joi";

export async function getMyOrders(ctx) {
    try {
        if (!ctx.state.user) throw new Error("No user supplied");
        const commandes = await CommandeModel.findByUserId(ctx.state.user.id);
        ctx.ok(commandes);
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}
export async function create(ctx) {
    try {
        const commandeValidationSchema = Joi.object({
            produit: Joi.string().required(),
        });
        const { error, value } = commandeValidationSchema.validate(
            ctx.request.body
        );
        if (error) throw new Error(error);
        const newCommande = await CommandeModel.create({
            ...value,
            user: ctx.state.user.id,
            
        });
        ctx.ok(newCommande);
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}
export async function destroy(ctx) {
    try {
        if (!ctx.params.id) throw new Error("No id supplied");
        await CommandeModel.deleteOne({
            _id: ctx.params.id,
            user: ctx.state.user.id,
        });
        ctx.ok("Ressource deleted");
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}