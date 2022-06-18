<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome: <strong>{{ nome }}</strong></p>
        <p>Idade: <strong>{{ idade }}</strong></p>
        <button @click="alterarNome">Alterar nome</button>
        <button @click="alterarIdade">Alterar idade</button>
        <hr>
        <div class="componentes">
            <app-usuario-info 
                :nome="nome" 
                :idade="idade"
                :sobrenome="sobrenome"
                @nomeMudou="nome = $event"
                :reiniciarFn="reiniciarNome"/><!-- Evento que vem do elemento filho -->
            <app-usuario-editar 
                :nome="nome"
                :idade="idade"
                :idadeAL="idadeAleatoria"/>
                <!--@idadeMudou="idade = $event"/> @idadeMudou="idade = $event" Evento que vem do elemento filho -->
                
                
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Pedro',
            sobrenome: 'Ferreira',
            idade: 21
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Ana'
        },
        reiniciarNome() {
            this.nome = 'Pedro'
        },
        alterarIdade() {
            
            this.idade = this.idadeAleatoria()
        },
        idadeAleatoria() {
            const value =  Math.random() * (100 - 1) + 1
            return Math.round(value)
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
