const dotenv = require('dotenv').config()
const { Game, Cart } = require('../models')


class Controller {

    static home(req, res) {
        res.send('halo')
    }

    static viewGames(req, res) {
        let accessLevel = req.session.accessLevel
        Game.findAll()
            .then(data => {
                res.render('viewGames.ejs', { data, accessLevel })
            })
            .catch(err => res.send(err))
    }

    static add(req, res) {
        let accessLevel = req.session.accessLevel
        res.render('addGames.ejs', { accessLevel })
    }

    static addPost(req, res) {
        let params = {
            name: req.body.name,
            genre: req.body.genre,
            platform: req.body.platform,
            status: 'Available'
        }
        Game.create(params)
            .then(data => {
                res.redirect('/games')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static edit(req, res) {
        let accessLevel = req.session.accessLevel
        Game.findByPk(req.params.id)
            .then(data => {
                res.render('editGame.ejs', { data, accessLevel })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editPost(req, res) {
        let params = {
            name: req.body.name,
            genre: req.body.genre,
            platform: req.body.platform,
            status: req.body.status
        }
        Game.update(params, {
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                res.redirect('/games')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteGame(req, res) {
        Game.destroy({ where: { id: req.params.id } })
            .then(data => {
                res.redirect('/games')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static rent(req, res) {
        let emailUser = req.session.email
        let idUser = req.session.id
        let params = {
            status: 'Rented'
        }
        let paramsCart = {
            userId: idUser,
            gameId: req.params.id
        }
        
        Cart.create(paramsCart)
        .then(data => {
            Game.update(params, {
                where: {
                    id: req.params.id
                }
            })
                .then(data => {
                    let tranporter = nodemailer.createTransporter({
                        service: 'gmail',
                        auth: {
                            user: process.env.EMAIL,
                            pass: process.env.PASSWORD
                        }
                    });
                    let mailOptions = {
                        from: process.env.EMAIL,
                        to: emailUser,
                        subject: 'Invoice',
                        text: 'isi email'
                    }
                    transporter.sendMail(mailOptions, (err, data) => {
                        if(err) {
                            res.send('error di sendmail')
                        }
                        else {
                            console.log('Invoice Sent!')
                        }
                    })
                    res.redirect('/games')
                })
                .catch(err => {
                    res.send('error di game update')
                })
        })
        .catch(err => {
            res.send('error di cart create')
        })
    }

}

module.exports = Controller