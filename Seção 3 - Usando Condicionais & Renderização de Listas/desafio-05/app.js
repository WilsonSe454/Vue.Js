new Vue({
	el: '#desafio',
	data: {
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livros: [
			{
				titulo: 'O Senhor dos Anéis: A Sociedade do Anel ',
				autor: 'J.R.R. Tolkiens',
				volume: '1'
			},
			{
				titulo: 'O Senhor dos Anéis: As Duas Torres',
				autor: 'J.R.R. Tolkiens',
				volume: '2'
			}, 
			{
				titulo: 'O Senhor dos Anéis: O Retorno do Rei',
				autor: 'J.R.R. Tolkiens',
				volume: '3'
			}
		],
		livro1:{
				titulo: 'O Senhor dos Anéis: A Sociedade do Anel ',
				autor: 'J.R.R. Tolkiens',
				volume: '1'
		},	
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
		alternar: false,
	}
});
