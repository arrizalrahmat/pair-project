const express = require('express')
const app = express()
const port = 3000
const route = require('./routes')
const session = require('express-session')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
        app.use(session({
            secret: 'kucing papan kunci',
            resave: false,
            saveUninitialized: true
          }))


app.use('/', route)

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`)
})