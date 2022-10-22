const Express = require('express');
const app = Express();
const port = 80;

const Autores = [
	{	
		id:0,
		nome: "Pagu",
		datNasc: "DD/MM/AAAA",
		datMort: "DD/MM/AAAA",
		bio: "Essa é uma biografia",
		obras: "Obras estarão linkadas no banco",
		foto: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Pagu.jpg"
	},
	{	
		id:1,
		nome: "Tarsila do Amaral",
		datNasc: "01/09/1886",
		datMort: "17/01/1973",
		bio: "Tarsila do Amaral foi uma pintora e desenhista brasileira, uma das artistas centrais da pintura brasileira e da primeira fase do movimento modernista brasileiro, ao lado de Anita Malfatti. Seu quadro Abaporu, de 1928, inaugurou o movimento antropofágico nas artes plásticas.",
		obras: "Obras estarão linkadas no banco",
		foto: "https://static.dw.com/image/19447239_605.jpg"
	},
	{	
		id:2,
		nome: "Anita Malfatti",
		datNasc: "01/09/1886",
		datMort: "17/01/1973",
		bio: `Anita Malfatti foi uma artista plástica brasileira. A mostra expressionista da pintora realizada em São Paulo na Exposição de Pintura Moderna foi um marco para a renovação das artes plásticas no Brasil. A crítica do escritor Monteiro Lobato, sobre a arte expressionista, publicada no jornal O Estado de São Paulo, intitulada "Paranoia ou mistificação" serviu de estopim para o Movimento Modernista no Brasil.`,
		obras: "Obras estarão linkadas no banco",
		foto: "https://s4.static.brasilescola.uol.com.br/be/2020/08/anita-malfatti.jpg"
	},
	{	
		id:3,
		nome: "Georgina de Albuquerque",
		datNasc: "01/09/1886",
		datMort: "17/01/1973",
		bio: `Georgina de Albuquerque é uma das principais mulheres brasileiras a conseguir firmar-se como artista no começo do século XX. Em suas pinturas, a artista tem como parâmetro o impressionismo e suas derivações. Elas apresentam uma paleta de cores luminosas, empregada com sensibilidade. Os temas mais constantes de Albuquerque são o nu, o retrato e a paisagem. Com amplas pinceladas, ela explora as incidências luminosas e a vibração cromática. A partir de 1920, passa a trabalhar com uma paleta mais sóbria e a realizar pinturas com temas da vida popular.`,
		obras: "Obras estarão linkadas no banco",
		foto: "https://www.revistacircuito.com/wp-content/uploads/2022/02/georgina-827x640-1.jpg"
	},
	{	
		id:4,
		nome: "Victor Brecheret",
		datNasc: "01/09/1886",
		datMort: "17/01/1973",
		bio: `O italiano Vittorio Brecheret (Farnese, 15 de dezembro de 1894 — São Paulo, 17 de dezembro de 1955) se ‘tornou brasileiro’ aos 10 anos de idade, quando veio morar com os tios maternos no Brasil. Por aqui, ganhou nacionalidade verde e amarela por volta dos 30 anos de idade, quando se registrou como Victor Brecheret e se tornou, assim, um dos artistas mais importantes do País.`,
		obras: "Obras estarão linkadas no banco",
		foto: "https://www.algosobre.com.br/images/stories/assuntos/biografias/Victor%20Brecheret.jpg"
	}
];

const Obras = [
	{name: 'O Mamoeiro', id: 0, autId: 1, relId: 6, foto: 'https://d3swacfcujrr1g.cloudfront.net/img/uploads/2000/01/007019001019.jpg',
		des: 
		`
			O Mamoeiro é uma obra da fase artística de Tarsila conhecida como Pau-Brasil, nessa fase as pinturas de Tarsila exaltavam a natureza tropical, valorizavam a brasilidade, os tipos humanos, e a tranqüilidade das pequenas cidades. A influência da escola cubista é marcante nessa fase, mas a diferença entre Tarsila e os outros pintores da época reside no fato de que ela representa a temática de nosso país com cores fortes. Esta obra mostra o início da ocupação dos morros das grandes cidades. Mostrando a vida simples, o dia a dia das pessoas (roupas no varal), vizinhas que se visitam, mãe com filhos. É importante refletir sobre a mudança de hábitos das pessoas a partir da grande concentração de pessoas que hoje habitam os morros.
		`
	},
	{name: 'Urutu', id: 1, autId: 1, relId:0, foto: 'https://assets.passeiweb.com/wp-content/uploadedfiles/uploads/psweb/galeria/tarsila_do_amaral/1928_o_ovo_urutu.jpg',
		des:`
		<span class="description">A obra <strong>Urutu</strong> ilustra o segundo dia da Semana Tarsila no projeto <strong>Um Pouco de Arte para sua Vida</strong> 2013 na Universia Brasil.</span>
        <span class="description">O quadro apresenta símbolos muito importantes da <strong>Antropofagia</strong>. Segundo o movimento antropofágico, a arte brasileira não deveria ignorar a <strong>cultura estrangeira</strong>, mas também não deveria imitá-la. Logo, a arte internacional seria <strong>base</strong> e <strong>inspiração</strong> para a <strong>arte brasileira.</strong></span>
        <span class="description">A cobra grande apresentada no quadro de <strong>Tarsila</strong> é um bicho que assusta e que tem o poder de “deglutição”. A partir de então, o ovo é uma <strong>gênese</strong>, o nascimento de algo novo. A combinação do poder de deglutição com o <strong>surgimento</strong> de uma novidade caracteriza o <strong>movimento modernista.</strong></span>`
	},
	{name: 'Os Operários', autId: 1, relId:2, id: 2, foto: 'https://upload.wikimedia.org/wikipedia/pt/1/16/Operarios.jpg',
		des: `
			A obra trás uma temática social, podendo ser considerada um dos melhores registros do período de industrialização brasileira. Trata de um momento histórico marcado pela migração de trabalhadores, uma classe ainda muito vulnerável e explorada, sem acesso a leis que a defendesse propriamente, Tarsila imortaliza em seu quadro as feições dos trabalhadores das fábricas. Uma das principais características da obra é o fato das faces serem bastante distintas: existem trabalhadores de todas as cores e raças representados lado a lado, ou seja, podemos interpretar que, apesar das diferenças, todos carregam no semblante feições extremamente cansadas e desesperançadas. São cinquenta e um rostos, muitos deles sobrepostos, todos sem o corpo registrado. Essa mistura de trabalhadores exibidos em sequência aponta para a massificação do trabalho. Os operários olham todos na mesma direção e não estabelecem qualquer contato visual uns com os outros. A disposição dos trabalhadores, em um formato crescente, de pirâmide, permite que se veja a paisagem ao fundo: uma série de chaminés cinzentas de fábricas.
		`
	},
	{name: 'A Onda', id: 3, autId:2, relId: 3, foto: 'https://i0.wp.com/virusdaarte.net/wp-content/uploads/2015/04/A-ONDA.jpg',
		des: `
			Anita passava os dias pintando ao ar livre, e ao anoitecer ouvia as aulas inspiradas de Homer Boss. Nesse ambiente de liberdade e inspiração, a artista explorou as influências expressionistas adquiridas durante seu aprendizado na Alemanha. Na obra A Onda, a paisagem local é representada como uma força selvagem, agressiva e dinâmica, e o uso da deformação expressa certa inquietação do olhar humano diante da natureza. Além da visível influência do artista japonês Hokusai e sua obra A Grande Onda de Kanagawa, a pintura também lembra a arte de Van Gogh com suas tempestuosas, abruptas e coloridas paisagens, onde cor e movimento expelem uma energia imensurável.
		`
	},
	{name: 'A Charrete', id: 4, autId:3, relId: 4, foto: 'https://lh3.googleusercontent.com/ci/AC_FhM86_v8hQDcmspXUtmek_3QGSqT_fHyey1hpcQsuBVjPv9UxZy6sCuWx7lzK-DhmO1fCRO7xnLdk', 
		des: `
			A obra a Charrete de Georgina Albuquerque está localizada no Rio de Janeiro, no museu nacional Belas Artes na coleção de Pintura brasileira. A pintora utilizou a técnica de óleo sobre a tela, popularmente conhecida como pintura a óleo, possuindo inspirações impressionistas. O impressionismo tem como seu foco mostrar através das artes plásticas, principalmente a pintura, os efeitos da luz do sol e apresentar as impressões pessoais dos artistas através de cores puras, também chamadas de cores primárias. uma das suas principais características é o registro das tonalidades das cores que a luz do sol produz em determinados momentos, sombras luminosas e coloridas, misturas das tintas diretamente na tela, com pequenas pinceladas e figuras sem contornos nítidos (não segue um padrão).
		`
	},
	{name: 'As mulheres de Victor Brecheret em mostra de desenhos e esculturas.', id: 5, autId:4, relId: 5, foto: 'http://www.achabrasilia.com/wp-content/uploads/2015/01/brecheret-brasilia.jpg', 
		des: `
		Os desenhos têm as características do escultor: resolvidos com linhas poucas, límpidas e leves, tomam forma de imagem feminina predominantemente com poucos traços determinados As esculturas foram produzidas em mármore, gesso, pedra granítica rolada pelo mar, bronze patinado e bronze polido. As obras presentes na exposição são, em sua maioria, nus femininos relacionados ao simbolismo feminino da Terra, a grande Mãe, a deusa Gaia, Geia, dos gregos, o elemento primordial e latente de uma potencialidade geradora ilimitada.
		`
	},
	{name: 'As mulheres de Victor Brecheret em mostra de desenhos e esculturas.', id: 6, autId:4, relId: 5, foto: 'http://www.achabrasilia.com/wp-content/uploads/2015/01/brecheret-brasilia.jpg', 
		des: `
		Os desenhos têm as características do escultor: resolvidos com linhas poucas, límpidas e leves, tomam forma de imagem feminina predominantemente com poucos traços determinados As esculturas foram produzidas em mármore, gesso, pedra granítica rolada pelo mar, bronze patinado e bronze polido. As obras presentes na exposição são, em sua maioria, nus femininos relacionados ao simbolismo feminino da Terra, a grande Mãe, a deusa Gaia, Geia, dos gregos, o elemento primordial e latente de uma potencialidade geradora ilimitada.
		`
	}
];

const Releituras = [
	{obraId: 1, foto: 'https://raw.githubusercontent.com/Ryaross/ImagensAmostra/main/releituraUrutu.jpeg', desc:
	`
		Enquanto a obra original tem dimensões de 60,5 x 72,5 cm e foi pintada com tinta a óleo sobre tela, a releitura mede 2x2m e foi pintada com tinta PVA sobre parede. A mudança da tinta proporciona um acabamento mais fosco. A releitura apresenta alterações em todos os elementos da pintura: a mudança nos degrades do céu e da grama, a troca do Ovo pelos livros (simbolizando o ambiente escolar e a biblioteca) e a alteração na espécie da cobra, que mudou de Urutu para Jararaca-ilhoa, espécie que vive exclusivamente na Ilha da Queimada Grande a 35 km do litoral paulista, entre os municípios de Itanhaém e Peruíbe (remetendo à região).
		<ul>
			<li>Mudança no tamanho: de 60,5 x 72,5 cm a 2x2 m;</li>
			<li>Mudança no material: de óleo sobre tela a tinta PVA sobre parede;</li>
			<li>Mudança nos elementos: degrades, troca do ovo pelos livros e mudança na espécie da cobra.</li>
		</ul>
	`
	},
	{foto: `https://github.com/Ryaross/ImagensAmostra/blob/main/ReleituraOperarios.jpeg`, desc:
		`
		<ul>
			<li>Mudança no tamanho: de 65x70 cm a 150x220 cm;</li>
			<li>Mudança no material: de óleo sobre tela a tinta PVA sobre tela;</li>
			<li>Mudança nos elementos: corte das laterais e efeito tridimensional.</li>
		</ul>
		`
	},
	{foto:`https://raw.githubusercontent.com/Ryaross/ImagensAmostra/main/ReleituraOperarios.jpeg`, desc:
		`
		Enquanto a obra original tem dimensões de 150cm x 205 cm e foi pintada com tinta a óleo sobre tela, a releitura mede 140x170 cm e foi pintada com tinta PVA sobre tela. A mudança da tinta proporciona um acabamento mais fosco. A releitura apresenta alterações em todos os elementos da pintura: a substituição de operários por rostos inspirados em alunos da Etec de Peruíbe (ainda mantendo a diversidade de cores e raças), a troca das fábricas ao fundo pela estrutura da Etec de Peruíbe (passando uma imagem atual e trazendo representatividade aos estudantes) e a utilização de cores mais vivas e vibrantes, revertendo o clima depressivo da obra original.
		<ul>
			<li>Mudança no tamanho: de 150cm x 205 cm a 140x170 cm;</li>
			<li>Mudança no material: de óleo sobre tela a tinta PVA sobre tela;</li>
			<li>Mudança nos elementos: troca de operários por aluno, de fábrica pela Etec de Peruíbe e utilização de cores mais vibrantes.</li>
		</ul>
		`
	},
	{
		foto:`https://raw.githubusercontent.com/Ryaross/ImagensAmostra/main/ReleituraAOnda.jpeg`, desc:
		`
		Enquanto a obra original tem dimensões de 26,5x36,2 cm e foi pintada com tinta a óleo sobre madeira, a releitura mede 50x60 cm e foi pintada com tinta PVA sobre tela. A mudança da tinta proporciona um acabamento mais fosco. O aumento no tamanho intensificou os detalhes, que foram feitos a partir de cores diferentes da obra original.
		As principais diferenças da versão feita pelo aluno Hector Vieira em comparação com a obra original são:
		<br>
		<ul>
			<li>Aumento de tamanho;</li>
			<li>Mudança no material: de óleo sobre madeira a tinta PVA sobre tela;</li>
			<li>Mudança nos elementos: detalhes, cores.</li>
		</ul>
		`
	},
	{
		foto:`https://raw.githubusercontent.com/Ryaross/ImagensAmostra/main/ReleituraCharrete.jpeg`, desc: 
		`
			A releitura é levemente maior em dimensões do que a obra original, e ambas foram pintadas com tinta a óleo sobre tela. O aumento no tamanho amplifica a presença dos detalhes, como por exemplo no cenário (árvores e montanhas ao fundo).
			<ul>
				<li>Aumento de tamanho;</li>
				<li>Mudança nos elementos: detalhes, cores.</li>
			</ul>

		`
	},
	{
		foto:`https://raw.githubusercontent.com/iamthepoe/calculadorapromptpython/main/WhatsApp%20Image%202022-10-21%20at%2015.47.04.jpeg`, desc: 
		`
			A releitura utiliza de formas geométricas pontiaguadas e foi realizada através da impressão 3D.
			

		`
	},
	{
		foto:``, desc: 
		`
			A obra original tem dimensões de 65x70 cm e foi pintada com tinta a óleo sobre tela, a releitura mede 150 x 220 cm e foi pintada com tinta PVA sobre tela. A mudança da tinta proporciona um acabamento mais fosco. A intenção da releitura é aumentar a interatividade da obra, através do aumento no tamanho, da continuação do rio da parte de baixo da pintura utilizando TNT azul e do efeito tridimensional que foi feito cortando os lados do quadro para ressaltar o que dá o nome à obra: O Mamoeiro.
		<ul>
			<li>Mudança no tamanho: de 65x70 cm a 150x220 cm;</li>
			<li>Mudança no material: de óleo sobre tela a tinta PVA sobre tela;</li>
			<li>Mudança nos elementos: corte das laterais e efeito tridimensional.</li>
		</ul>
		`
	}
]

app.set('view engine', 'ejs');
app.use(Express.static('public'));


app.get('/', (req,res)=>{
	res.render('index.ejs');
});

app.get('/historia', (req, res)=>{
	res.send('Rota sobre a história do modernismo');
});

app.get('/obras', (req,res)=>{
	res.render('obras', {obras: Obras, autores: Autores});
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
			res.render('obra', {id: id, obra: Obras[id], autor: Autores[Obras[id].autId], releitura: Releituras[Obras[id].relId]});
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

app.listen(80, ()=>console.log(`Server runing in ${port} port`));
