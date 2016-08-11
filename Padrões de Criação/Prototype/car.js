var meuCarro = {
    nome: "Ford Escort",

    dirigir: function() {
        console.log("Aeeeeeê!!! Estou dirigindo!!!");
    },

    panico: function() {
        console.log("Oh não!!!! Estou subindo uma ladeira!!!!");
    }
};

/* Usando o 'Object.create' para poder instanciar um novo Carro */
var seuCarro = Object.create(meuCarro);

console.log(seuCarro.nome);