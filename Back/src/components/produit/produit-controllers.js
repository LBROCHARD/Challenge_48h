import ProduitModel from "#components/produit/produit-model.js";
import apiModel from "#components/api/api-model.js";


import Joi from "Joi";

export async function index(ctx) {
    try {
        const produits = await ProduitModel.find({});
        const api = await apiModel.find({});
        ctx.ok( produits);
     
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}

export async function id(ctx) {
    try {
        if (!ctx.params.id) throw new Error("No id supplied");
        const produit = await ProduitModel.findOne({_id: ctx.params.id});
        if (!produit) {
            return ctx.notFound();
        }
        ctx.ok(produit);
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}

export async function getAllByUser(ctx) {
    try {
        if (!ctx.params.userId) throw new Error("No id supplied");
        const users = await ProduitModel.findByUserId(ctx.params.userId);
        ctx.ok(users);
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}

export async function getMyLists(ctx) {
    try {
        if (!ctx.state.user) throw new Error("No user supplied");
        const produits = await ProduitModel.findByUserId(ctx.state.user.id);
        ctx.ok(produits);
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}

export async function create(ctx) {
    try {
        const produitValidationSchema = Joi.object({
            title: Joi.string().required(),
            price: Joi.number().required(),
            description: Joi.string().required(),
            image: Joi.string(),
        });
        const { error, value } = produitValidationSchema.validate(
            ctx.request.body
        );
        if (error) throw new Error(error);
        const newProduit = await ProduitModel.create({
            ...value,
            user: ctx.state.user.id,
            username: ctx.state.user.nom,
        });
        ctx.ok(newProduit);
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}

export async function update(ctx) {
    try {
        const produitValidationSchema = Joi.object({
            title: Joi.string().required(),
            price: Joi.number().required(),
            description: Joi.string().required(),
            image: Joi.string(),
        });
        if (!ctx.params.id) throw new Error("No id supplied");
        const { error, value } = produitValidationSchema.validate(
            ctx.request.body
        );
        if (error) throw new Error(error);
        const updatedProduit = await ProduitModel.findOneAndUpdate({ _id: ctx.params.id, user: ctx.state.user.id },
            value, { runValidators: true, new: true }
        );
        ctx.ok(updatedProduit);
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}

export async function destroy(ctx) {
    try {
        if (!ctx.params.id) throw new Error("No id supplied");
        await ProduitModel.deleteOne({
            _id: ctx.params.id,
            user: ctx.state.user.id,
        });
        ctx.ok("Ressource deleted");
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}