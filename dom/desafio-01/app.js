
    new Vue({
        el: '#desafio',
    data: {
        nome: 'Fulano',
        idade: 22,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        randomico() {
            numeroRandomico = Math.floor(Math.random() * 11)
            if (numeroRandomico == 0){
                console.log(numeroRandomico);
                this.randomico()
                
            }
            return numeroRandomico  
        },
        alterarNome() {
            this.nome = event.target.value
        }
    }
})
