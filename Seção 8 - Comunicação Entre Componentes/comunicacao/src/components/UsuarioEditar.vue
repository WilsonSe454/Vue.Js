<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Nome do Usuário: <strong>{{ nome }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="alterarIdade">Alterar Idade</button>
    </div>
</template>

<script>
import barramento from '../barramento'// o @ leva direto para o src/
export default {
    // Várias formas de declarar as props
    /* props: {
         nome: { // Recebendo uma propriedade do elemento pai, que foi modificado através de um emit disparodo no elemento irmão
            type: String,
            default: 'Anônimo'
        } ,
        idade: {
            type: Number
        },
        idadeAL: Function
        
    }, */
    props: { nome: String, idade:Number, idadeAL:Function },
    // props: ['nome','idade','idadeAL'],
    methods: {
        alterarIdade() {
            // this.$emit('idadeMudou', this.idadeAL())//está emitindo um evento para o elemento pai
            this.idade += 1
            // barramento.$emit('idadeMudou', this.idade)//Usando o barramento para fazer a comunicação entre elemento irmãos
            barramento.alterarIdade(this.idade)//Usando o barramento para fazer a comunicação entre elemento irmãos. Usando uma função dentro do barramento.
        }
    }

}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
