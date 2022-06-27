<template>
    <div class="citacao">
        <!-- {{ texto }} -->
        <!-- <slot></slot> -->
        <slot name="fonte"></slot>
        <slot name="autor"></slot>
        <slot name="texto"></slot>
    </div>
</template>

<script>
export default {
    props:['texto'] //não precisa passar propriedade se for usado a tag slot
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
    h1{
        color: black!important;/* para que citação consiga aplicar o estilo  */
    }
</style>
