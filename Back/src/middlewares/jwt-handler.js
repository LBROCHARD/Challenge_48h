import koaJwt from 'koa-jwt';

import UserModel from '#components/user/user-model.js';
import compose from 'koa-compose';
export const isAuthentificated = koaJwt({
    secret: process.env.JWT_SECRET,
})
export const resolveUserFromJWT = async (ctx, next) => {
    try {
    const user = await UserModel.findById(ctx.state.user.id)
    ctx.state.user = user
    return next()
    } catch (e) {
        ctx.unauthorized({ message: e.message })
    }
    
}
export const resolveRoleUser = async (ctx, next) => {
    try {
    const user = await UserModel.findById(ctx.state.user.id)
    ctx.state.user = user.role
    if(user.role != 'admin' && user.role!='commercant') throw new Error('You don\'t have the right to do this')
    ctx.state.user = user
        return next()
    
    
    } catch (e) {
        ctx.unauthorized({ message: e.message })
    }
}
export const isAuthentificatedAndResolveUser = compose([isAuthentificated, resolveUserFromJWT])
export const isAuthentificatedAndResolveRoleUser = compose([isAuthentificated, resolveRoleUser])