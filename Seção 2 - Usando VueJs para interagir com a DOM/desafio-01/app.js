new Vue({
    el: '#desafio',
    data:{
        nome: 'Jose Wilson',
        idade: 31,
        linkImagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        numerosAleatorios(){
            return Math.random()
        },
    },
})