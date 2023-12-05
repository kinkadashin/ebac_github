function Animal(nome, idade) {
    this.nome = nome
    this.idade = idade
}

function Cachorro(nome, idade, raca) {
    this.raca = raca
    this.fazerBarulho = function() {
        console.log("Au au!")
    }

    Animal.call(this, nome, idade)
}

function Gato(nome, idade, cor) {
    this.cor = cor
    this.fazerBarulho = function() {
        console.log("Miau Miau!")
    }
    this.arranharMobilia = function() {
        console.log("RAWR RAWR :3")
    }

    Animal.call(this, nome, idade)
}

const dogTulio = new Cachorro("Rex", 3, "Labrador")
const catLucas = new Gato("Milli", 1, "Siamês")
const catJennifer = new Gato("Romelson", 5, "Preto")


dogTulio.fazerBarulho()
console.log(dogTulio)
catLucas.fazerBarulho()
console.log(catLucas)
catJennifer.arranharMobilia()
console.log(catJennifer)