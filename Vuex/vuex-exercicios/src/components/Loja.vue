<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Serviço</span>
            <input type="text" v-model.number="serveco">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">

            <button @click="adicionar">adicionar ao carrinho!</button>
        </div>
    </Painel>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            serveco: null,
            sequencia: 1,
            quantidade: 1,
            preco: 9.99,
        }
    },
    methods: {
        ...mapActions(['adicionarProduto']),
        adicionar() {
            const produto = {
                serveco: this.serveco,
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco,
                
            }
            this.sequencia++
            
            // this.$store.state.produtos.push(produto)
            // this.$store.commit('adicionarProduto', produto)
            // this.adicionarProduto(produto)
            this.$store.dispatch('adicionarProduto', produto)
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
