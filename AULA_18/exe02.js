// quando uma função esta dentro de um objeto ela é chamada de método. Segue exemplo:
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    /*
    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }
    */

    fala() {
        console.log(`A minha idade é: ${this.idade}.`)
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();