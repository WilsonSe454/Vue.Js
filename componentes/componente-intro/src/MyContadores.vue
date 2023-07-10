<template>
    <div class="contadores">
        <app-contador></app-contador>
    </div>
</template>

<script>
import Contador from './MyContador.vue'
export default {
    components: { 'app-contador' : Contador}
}
</script>

<style>


</style>