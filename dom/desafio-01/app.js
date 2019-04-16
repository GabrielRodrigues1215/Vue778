
    new Vue({
        el: '#desafio',
        data: {
            nome: 'Gabriel',
            idade: 20,
            imagem1: "we-can_213n.jpg",
            imagem2: "download.jpeg"
        },
        methods: {
            idadeVezes3() {
                return this.idade * 3
            },
            random() {
                return Math.random()
            }
        }

    })