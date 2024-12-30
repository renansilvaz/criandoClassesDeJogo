class Hero{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    atacar(){
        alert(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let nome = prompt("Olá, viajante!\n\nQual o seu nome?")
let idade = prompt("E quantos anos você tem?")
let tipo = prompt("Selecione sua classe:\n\n"+
    "1. Guerreiro\n"+
    "2. Mago\n"+
    "3. Monge\n" +
    "4. Ninja"
)
let ataque = ""

switch(tipo){
    case "1":
        let player = new Hero(nome, idade, tipo, ataque)
            player.tipo = "Guerreiro"
            player.ataque = "espada!"
            player.atacar()
       break
    case "2":
        let player2 = new Hero(nome, idade, tipo, ataque)
            player2.tipo = "Mago"
            player2.ataque = "Magia"
            player2.atacar()
        break
    case "3":
        let player3 = new Hero(nome, idade, tipo, ataque)
            player3.tipo = "Monge"
            player3.ataque = "Artes marciais"
            player3.atacar()
        break
    case "4":
        let player4 = new Hero(nome, idade, tipo, ataque)
            player4.tipo = "Ninja"
            player4.ataque = "Shuriken"
            player4.atacar()
        break
}
