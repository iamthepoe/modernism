const Express = require('express');
const app = Express();
const port = 8080;
const connection = require('./database/database.js');

const Autores = [
	{name: 'Pagu', id: 0},
	{name: 'Tarsila', id:1},
	{name: 'Villa Lobos', id:2}
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
	res.send('Rota das obras');
});

app.get('/autores', (req,res)=>{
	res.send('Rota dos autores');
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
			res.render('autor', {id: id, nome: (Autores[id].name)});
		}
	}
});

app.listen(port, ()=>console.log(`Server runing in ${port} port`));