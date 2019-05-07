<template>
    <div>
        <form action="">
            <p>Nome:</p>
            <input type="text" placeholder="Digite seu nome">
            <p>Email:</p>
            <input type="email" placeholder="Digite seu email">
            <hr>
            <button sucesso @click="irParaInicio">Voltar</button>
        </form>
        
    </div>
</template>

<script>
export default {
      methods: {
        irParaInicio(){
            this.$router.push('/')
        }
    }

}
</script>

<style>

</style>
