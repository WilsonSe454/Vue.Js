new Vue({
    el: '#app',
    data: {
        iniciar: false,
        monstro: 100,
        jogador: 100,
        logs:[]
        

    },
    computed: {
        life() {
            return {
                width: `${this.jogador}px`,
                // width: this.largura + 'px'
            }
        }
    },
    methods: {
        randomico(min, max, nome){
            var resultado = Math.floor(Math.random() * (max - min)) + min;
            console.log(resultado, nome);
            return resultado
            
        },
        atacar() {
            var monstro = this.randomico(8, 13, 'monstro')
            var jogador
            do
                jogador = this.randomico(5, 12, 'jogador')
            while(jogador >= monstro)
            
            if(this.monstro >=0){
                this.monstro -= jogador
            }
            if(this.jogador >=0){
                this.jogador -= monstro
            }
            this.logs.push('MONSTRO ATIGIU JOGADOR COM '+ monstro + '.', 'JOGADOR ATINGIU MONSTRO COM ' + jogador + '.')
        },
        ataqueEspecial() {
            jogador = this.randomico(8, 13, 'jogador')
            var monstro
            do
                var monstro = this.randomico(5, 12, 'monstro')
            while(monstro >= jogador)
            
            if(this.monstro >=0){
                this.monstro -= jogador
            }
            if(this.jogador >=0){
                this.jogador -= monstro
            }
            
        },
        desistir() {
            this.iniciar = false
            this.monstro = 100
            this.jogador = 100
        }
    }
   
})