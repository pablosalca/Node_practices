const express = require('express')
const app = express()
const port = 8080;
// require('hbs');
// TODO: requre('hbs');
app.set('view engine', 'hbs');

// middleware static content
app.use(express.static('public'));


app.get('/', (req, res) => {
    //render the file in views/home.hbs
    res.render('home', {
        nombre: 'Pablo Zapeta',
        data: 'Curso node'

    });
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
});


app.get('/elements ', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
});



app.get('*', (req, res) => {
    res.send('404 | page not found')
});

app.listen(port, () => {
    console.log(`ejemlo app escuchando en http://localhost:${port}`);
})