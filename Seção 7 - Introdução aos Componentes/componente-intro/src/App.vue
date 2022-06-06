<template>
  <div>
    <h1>Contadores </h1>
    <button @click="contador--">Subtrair</button>
    <span class="numero">{{ contador }}</span>
    <button @click="contador++">Adicionar</button>
  </div>

</template>

<script>

export default {
  data() {
    return {
      contador: 0

    }
  }
}
</script>

<style>
  .numero{
    margin-left: 5px;
    padding-left: 15px;
    margin-right: 5px;
    padding-right: 15px;
    border: solid 1px;
    border-radius: 2px;
  }
</style>
