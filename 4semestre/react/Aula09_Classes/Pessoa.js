const pessoa = {
    nome: "Joaquim",
    idade: 30,
    profissao: "Arquiteto",
    apresentar: function() {
        return `Sou ${this.nome} e sou ${this.profissao}`;
    }
};

console.log(pessoa.apresentar());