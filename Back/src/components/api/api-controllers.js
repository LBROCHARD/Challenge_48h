import apiModel from "#components/api/api-model.js";


import Joi from "Joi";

export async function index(ctx) {
    try {
        const api = await apiModel.find({});
        ctx.ok(api);
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}


export async function create(ctx) {
    try {
        const apiValidationSchema = Joi.object({
            url: Joi.string().required(),
           
        });
        const { error, value } = apiValidationSchema.validate(
            ctx.request.body
        );
        if (error) throw new Error(error);
        const newApi = await apiModel.create({
            ...value,
            user: ctx.state.user.id,
        });
        ctx.ok(newApi);
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}

export async function update(ctx) {
    try {
        const produitValidationSchema = Joi.object({
            url: Joi.string().required(),
            
        });
        if (!ctx.params.id) throw new Error("No id supplied");
        const { error, value } = produitValidationSchema.validate(
            ctx.request.body
        );
        if (error) throw new Error(error);
        const updatedApi = await apiModel.findOneAndUpdate({ _id: ctx.params.id, user: ctx.state.user.id },
            value, { runValidators: true, new: true }
        );
        ctx.ok(updatedApi);
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