<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <!-- {{ numero }} {{ indice }} -->
        <!-- {{ citacoes[indice].texto }} -->
        <!-- <Citacao :texto="citacoes[indice].texto"></Citacao> -->
        <Citacao> 
            <slot>
                <h1 slot="autor">{{ citacoes[indice].autor }}</h1>
                <!-- <h1 slot="autor">{{ citacoes[indice].autor }}</h1> é possivel passar mais de um slot com o mesmo nome -->
                <p slot="texto">{{ citacoes[indice].texto }}</p>
                <h6 slot="fonte">{{ citacoes[indice].fonte }}</h6>
            </slot>
        </Citacao>
    </div>
</template>

<script>
import Citacao from './Citacao.vue'
export default {
    components: { Citacao },
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, 
            { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, 
            {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            },
            {
                fonte: 'Frases da Mãe',
                texto: 'Já levou o lixo pra fora?',
                autor: 'Roberta'
            },
            {
                fonte: 'Frases do Filho',
                texto: 'Não foi eu!',
                autor: 'Joãozinho'
            }
            ]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % this.citacoes.length)
        }
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        color: red;
    }
</style>
