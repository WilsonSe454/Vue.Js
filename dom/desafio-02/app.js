new Vue({
    el: '#desafio',
    data: {
        valor: '',
        quantidade: 0
    },
    methods: {
        emitirAlerta() {
            if(this.valor.length > 0 )
                alert('Parabéns vc é o cliente '+ this.valor +', acaba de ganhar um volte sempre kkkkk')
            else
                alert('Insira um valor por favor')
                
        },
        alterarValor(n,event) {
            this.quantidade += n
            console.log('Você clicou no enter '+this.quantidade+' vezes');
            this.valor = event.target.value
        }
    }
})