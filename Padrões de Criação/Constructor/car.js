function Carro(modelo, ano, km) {
    this.modelo = modelo;
    this.ano = ano;
    this.km = km;

    this.toString = function() {
        return this.modelo + ' percorreu ' + this.km + ' kilometros';
    };
}

/* Podemos criar novas instâncias do Carro */
var civic = new Carro("Honda Civic", 2009, 20000);
var ford = new Carro("Ford Mondeo", 2010, 5000);

/* Agora apresentar os dados na tela do console chamando o método toString() */
console.log(civic.toString());
console.log(ford.toString());