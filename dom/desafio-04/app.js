new Vue({
	el: '#desafio',
	data: {
		perigo: true,
		classe1: 'destaque',
		aplicarCor: 'preto',
		trocarCor: true,
		Classe3: '',
		Classe4: '',
		cor5: '',
		estilo5: {
			width: '100px',
			height: '100px',
		},
		width: 0 ,
		

	},
	methods: {
		iniciarEfeito() {
			setInterval(() =>{
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			},1000)
		},
		iniciarProgresso() {

		},
		setPerigo(event) {
			if(event.target.value == "true") {
				this.perigo = true
			} else if(event.target.value == "false") {
				this.perigo = false
			}
		}
		,
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(()=>{
				valor += 1
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			},100)
		}
		
	}
})
