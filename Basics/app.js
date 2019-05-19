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
        content: 'I am a demo text from home page'
    })
})

app.get('/1', (req, res) => {
    res.render('page1', {
        title: 'Page 1',
        content: 'I am a demo text from page 1'
    })
})

app.get('/2', (req, res) => {
    res.render('page2', {
        title: 'Page 2',
        content: 'I am a demo text from page 2'
    })
})

app.listen(port, () => {
    console.log('Server is started')
    console.log(`Open http://localhost:${port} in your browser`)
})