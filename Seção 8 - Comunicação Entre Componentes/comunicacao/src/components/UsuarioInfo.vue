<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ nome }}</strong></p>
        <p>Nome do Invertido: <strong>{{ inverterNome() }}</strong></p>

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
        }
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
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
