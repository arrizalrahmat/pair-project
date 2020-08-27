const {User, Game} = require('../models')
const bcryptjs = require('bcryptjs')

class Controller {
    static login(req, res) {
        res.render('loginForm.ejs')
    }

    static loginPost(req, res) {
        let params = {
            username:req.body.username,
            password:req.body.password
        }
        User.findOne({where:{
            username:req.body.username
        }})
        .then(data => {
            console.log(data)
            if(data) {
                let flag = bcryptjs.compareSync(req.body.password, data.password)
                if(flag) {
                    req.session.accessLevel = data.accessLevel
                    req.session.email = data.email
                    req.session.idUser = data.id
                    console.log(`INI DATA ====> ${req.session.idUser}`)
                    res.redirect('/games')
                }
                else {
                    req.app.locals.errors = 'username / password salah'
                    res.redirect('/login')
                }
            }
            else {
                req.app.locals.errors = 'username / password salah'
                res.redirect('/login')
            }
        })
        .catch(err => {
            res.send(err)
        })
    }

    static register(req, res) {
        res.render('registerForm.ejs')
    }

    static registerPost(req, res) {
        let params = {
            username:req.body.username,
            password:req.body.password,
            name:req.body.name,
            address:req.body.address,
            email:req.body.email,
            birthDate:req.body.birthDate,
            accessLevel:'admin'
        }
        console.log(params)

        User.create(params)
        .then(data => {
            res.redirect('/')
        })
        .catch(err => {
            res.send(err)
        })
    }

}

module.exports = Controller