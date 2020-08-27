const dotenv = require('dotenv').config()
const { Game, Cart } = require('../models')
const nodemailer = require('nodemailer')
const mailOptions = require('../helpers/mailOptions.js')


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
        let idUser = req.session.idUser
        let params = {
            status: 'Rented'
        }
        let paramsCart = {
            UserId: idUser,
            GameId: req.params.id
        }
        console.log(`ini paramsCart => ${paramsCart}`)

        Cart.create(paramsCart)
            .then((data) => {
                return Game.update(params, {
                    where: {
                        id: req.params.id
                    }
                })
            })
            .then(data => {
                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'hacktiv8pi46arrizal@gmail.com',
                        pass: '1234Lima'
                    }
                });
                transporter.sendMail(mailOptions('hacktiv8pi46arrizal@gmail.com', 'arrizalrahmat@gmail.com'), (err, data) => {
                    if (err) {
                        res.send('error di sendmail')
                    }
                    else {
                        console.log('Invoice Sent!')
                    }
                })
                console.log('MASOK')
                res.redirect('/games')
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }

}

module.exports = Controller