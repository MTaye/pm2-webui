const config = require('../config')

const checkAuthentication = async (ctx, next) => {
    if(ctx.session.isAuthenticated){
        return ctx.redirect(config.BASEURL + '/apps')
    }
    await next()
}

const isAuthenticated = async (ctx, next) => {
    if(!ctx.session.isAuthenticated){
        return ctx.redirect(config.BASEURL + '/login')
    }
    await next()
}

module.exports = {
    isAuthenticated,
    checkAuthentication,
};