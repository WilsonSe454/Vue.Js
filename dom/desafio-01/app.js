new Vue({
    el: '#desafio',
    data: {
        nome: 'Wilson',
        idade: 32,
        img: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        multiplicarIdade(vezes){
            return this.idade * vezes
        },
        alterarnome(){
            this.nome = event.target.value
            return this.nome
        }
    }
})