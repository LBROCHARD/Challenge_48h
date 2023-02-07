import UserModel from "#components/user/user-model.js";
import Joi from "joi";
import argon2, { hash } from "argon2";
import { sendWelcomeEmail } from "#services/mailing/welcome-email.js";
import { isAuthentificated } from "#middlewares/jwt-handler.js";

export async function register(ctx) {
    try {
        const registerValidationSchema = Joi.object({
            email: Joi.string().email().required(),
            nom: Joi.string().required(),
            password: Joi.string().min(6).required(),
            terms_and_conditions: Joi.boolean().valid(true).required(),
            role: Joi.string().valid("client", "admin","commercant").required(),
        });
        const params = ctx.request.body;
        const { error, value } = registerValidationSchema.validate(params);
        if (error) throw new Error(error);
        const hashedPassword = await argon2.hash(value.password);
        const newUser = new UserModel({
            ...value,
            password: hashedPassword,
            settings: {
                terms_and_conditions: value.terms_and_conditions,
            },
        });
        newUser.generateEmailVerificationToken();
        const user = await newUser.save();
        await sendWelcomeEmail(user, user.settings.validation_email_token)
            .then((r) => console.log(r))
            .catch((e) => console.log(e));
        const token = user.generateJWT();
        ctx.ok({ token });
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}

export async function id(ctx) {
    try {
        if (!ctx.params.id) throw new Error("No id supplied");
        const produit = await UserModel.findOne({_id: ctx.params.id});
        if (!produit) {
            return ctx.notFound();
        }
        ctx.ok(produit);
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}

export async function login (ctx) {
  try {
    const loginValidationSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6)
    })
    const params = ctx.request.body
    const { error, value } = loginValidationSchema.validate(params)
    if(error) throw new Error(error)  
    const user = await UserModel.findOne({ email: value.email })
    const password = await UserModel.findOne({ email: value.email }).select('password')
    console.log(password)
    if(!user) throw new Error('User not found') 
    const isPasswordValid = await argon2.verify(password.password, value.password)
    if(!isPasswordValid) throw new Error('Invalid password')
    ctx.ok({message: 'Login successful'})
    const token = user.generateJWT()
     await user.save()
    ctx.ok({ "activeToken" : token})
  } catch(e) {
    ctx.badRequest({ message: e.message })
  }
  
}
export async function update(ctx) {
    try {
        const updateValidationSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6),
        });

        const params = ctx.request.body;
        const { error, value } = updateValidationSchema.validate(params);
        value.password = await argon2.hash(value.password);
        console.log(value);

        if (error) throw new Error(error);
        const updatedUser = await UserModel.findByIdAndUpdate(
            ctx.params.id,
            value, { runValidators: true, new: true }
        );
        ctx.ok(updatedUser);
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}
