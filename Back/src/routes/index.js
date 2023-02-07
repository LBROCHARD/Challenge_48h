import Router from '@koa/router'
import apiRoutes from '../components/api/api-routes.js'
import produitRoutes from '#components/produit/produit-routes.js'
import userRoutes from '#components/user/user-routes.js'
import orderRoutes from '../components/commande/commande-routes.js'

const API_V1_ROUTER = new Router({ prefix: '/api/v1' })

API_V1_ROUTER.use('/api', apiRoutes.routes(), apiRoutes.allowedMethods())
API_V1_ROUTER.use('/produits', produitRoutes.routes(), produitRoutes.allowedMethods())
API_V1_ROUTER.use('/orders', orderRoutes.routes(), orderRoutes.allowedMethods())
API_V1_ROUTER.use('/users', userRoutes.routes(), userRoutes.allowedMethods())

export { API_V1_ROUTER }
