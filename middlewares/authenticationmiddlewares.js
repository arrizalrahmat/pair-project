const authenticationMiddleWare = (req, res, next) => {
    if(req.session.accessLevel){
        next()
    }
    else{
        req.app.locals.errors = 'Login dulu bosskuuu'
        res.redirect('/login')
    }
    
}

module.exports = authenticationMiddleWare