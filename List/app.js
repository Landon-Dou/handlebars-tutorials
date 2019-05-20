const app = require('express')()
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 3000

// Configurations
hbs.registerPartials(__dirname + '/views/partials')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// Routings
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        content: [
            'Facebook just launched a rocket to the moon on sunday',
            'iPhone XXL has a new feature called dancing mode',
            'Shocking report exposes hidden secret of the universe'
        ],
        user: {
            id: '100001',
            notifications: 0,
            email: 'example@example.com'
        },
        isLoggedIn: true
    })
})

app.listen(port, () => {
    console.log('Server is started')
    console.log(`Open http://localhost:${port} in your browser`)
})