<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ nome }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <p>Nome do Invertido: <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciarNome" >Reiniciar nome</button>
        <button @click="reiniciarFn()" >Reiniciar Nome (Callback)</button>
        <p>Nome do Usuário: <strong>{{ sobrenome }}</strong></p>
    </div>
</template>

<script>
export default {
    // props: ['nome'],
    props: {
        nome: {
            type: String,
            // required: true,
            default: 'Anônimo'
        },
        sobrenome: {
            type: String,
            default: function() {
                return Array(10).fill(0).join(',')
            }
        },
        idade: Number,

        reiniciarFn: Function
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
             // const antigo = this.nome
            /*this.nome = 'Pedro'
            this.$emit('nomeMudou', this.nome) // emitir um evento personalizado */
            this.$emit('Pedro') // emitir um evento personalizado
            /*this.$emit('nomeMudou', {
                novo: this.nome,
                antigo
            }) */
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
