new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Testando!')
        },
        metKeydown(event){
            this.valor = event.target.value
        }
    }
})