class ContaBancaria {
  constructor(agencia, tipo, numero) {
    this.agencia = agencia;
    this._saldo = 0;
    this.tipo = tipo;
    this.numero = numero;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return "Operacao Negada";
    }
    this._saldo -= valor;

    return this._saldo;
  }

  depositar(valor) {
    this._saldo += valor;

    return this._saldo;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "Corrente";
    this.cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(sagencia, numero);
    this.tipo = "Poupanca";
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(sagencia, numero);
    this.tipo = "Universitaria";
  }

  saque(valor) {
    if (valor > 500) return "Operacao Negada";
    this._saldo -= valor;
  }
}
