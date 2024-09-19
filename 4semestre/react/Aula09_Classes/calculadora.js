const calculadora = {
    A: 2,
    B: 1,
    C: 1,
    soma: function() {
        return `A soma de A, B e C eh igual a ${this.A+this.B+this.C}`;
    }
};

console.log(calculadora.soma());