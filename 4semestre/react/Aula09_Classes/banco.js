class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`DepOoito de R$${valor} feito. Saldo atual: R$${this.saldo}`);
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} feito. Saldo atual: R$${this.saldo}`);
        } else {
            console.log(`Saldo nao deu nn. Faltou  R$${valor - this.saldo}`);
        }
    }
}

const conta = new ContaBancaria("Kaike", 1000);

conta.depositar(500);
conta.sacar(300);
conta.sacar(1500);