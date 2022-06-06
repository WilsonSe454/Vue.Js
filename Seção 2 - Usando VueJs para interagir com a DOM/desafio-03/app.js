new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado(){
            return this.valor == 37 ? "Valor Igual a 37" : "Valor diferente a 37"
        }
    },
    watch: {
        resultado(){
            setTimeout(() =>{
                this.valor = 0
            }, 5000)
        }
        /* valor(novo, antigo){
            console.log(novo, antigo);
            if(novo === 37){
                setTimeout(() =>{
                    this.valor = 0
                }, 5000)
            }
        } */
    }
});