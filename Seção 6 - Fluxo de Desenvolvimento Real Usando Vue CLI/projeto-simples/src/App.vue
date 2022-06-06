<template>
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '!'">Alterar titulo</button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      titulo: 'Testando Vue JS'
    }
  },
  methods: {
    alterarCor(){
      
    }
  }
}
</script>
<style>
  #app{
    background-color: chocolate;
    color:white;
  }
</style>


<!-- <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
 -->