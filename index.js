const Express = require('express');
const app = Express();
const port = 8080;
const connection = require('./database/database.js');
const Autor = require('./database/Autor.js');
const Obra = require('./database/Obra.js');

const Autores = [
	{	
		id:0,
		nome: "Pagu",
		datNasc: "DD/MM/AAAA",
		datMort: "DD/MM/AAAA",
		bio: "Essa é uma biografia",
		obras: "Obras estarão linkadas no banco",
		foto: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Pagu.jpg"
	}
];

const Obras = [
	{name: 'A', id: 0},
	{name: 'B', id: 1},
	{name: 'C', id: 2}
];

app.set('view engine', 'ejs');
app.use(Express.static('public'));

connection
	.authenticate()

	.then(() => {
		console.log("Successful connection.");
	})

	.catch((e)=>{
		console.log(e);
	});

app.get('/', (req,res)=>{
	res.render('index.ejs');
});

app.get('/historia', (req, res)=>{
	res.send('Rota sobre a história do modernismo');
});

app.get('/obras', (req,res)=>{
	res.render('obras', {obras: Obras});
});

app.get('/autores', (req,res)=>{
	res.render('autores', {autores: Autores});
});

app.get('/obras/:id', (req,res)=>{
	let id = req.params.id;
	if(!isNaN(id)){
		if(id==undefined){
			res.redirect('/autores');
		}else{
			res.render('obra', {id: id, nome: (Obras[id].name)});
		}
	}
});

app.get('/autores/:id', (req,res)=>{
	let id = req.params.id;
	if(!isNaN(id)){
		if(id==undefined){
			res.redirect('/autores');
		}else{
			res.render('autor', {autor: Autores[id]});
		}
	}
});

app.listen(port, ()=>console.log(`Server runing in ${port} port`));