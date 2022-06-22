import Vue from 'vue'
    export default new Vue({
        methods: {
            setUsuarioSelecionando(usuario) {
                this.$emit('usuarioSelecionando', usuario)
            },
            onUsuarioSelecionado(callback) {
                this.$on('usuarioSelecionando', callback)
            }
        }

    })