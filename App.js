
const express = require('express');
const app = express();
const port = 8081;


app.set('view engine', 'ejs');
app.set('views', './views');

const nome = 'Membros';

const pessoas = [
    {
        'nome': 'Yann',
       'idade': 36,
    },
    {
       'nome': 'Joce',
       'idade': 34,
    },
    {
        'nome': 'Ybi',
        'idade': 32,
    },
]

app.get('/', (req, res) => {
   res.render('home', {nome: nome, pessoas: pessoas});
});



app.get ('/footer', (req, res) => {
    res.render('footer', { nome: req.query.nome})
})
app.get ('/header', (req, res) => {
    res.render('header', { nome: req.query.nome})
})
app.get ('/home', (req, res) => {
    res.render('home', { nome: req.query.nome || 'Membros', pessoas: pessoas  })
})
app.get ('/index', (req, res) => {
    res.render('index', { nome: req.query.nome})
})

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`);
});