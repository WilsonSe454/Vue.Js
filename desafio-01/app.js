new Vue({
    el: '#desafio',
    data: {
        nome: 'Wilson',
        idade: 32
    },
    methods: {
        multiplicarIdade(vezes){
            return this.idade * vezes
        },
    }
})