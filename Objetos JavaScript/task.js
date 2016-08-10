//var task = Object.create(Object.prototype);
/*Outra maneira de declarar um Objeto em JavaScript*/
var task = new Object();

task.title = 'Olá a Todos!!!';
task.description = 'Vamos Programar';

/* Outra maneira de exibir a variável */
task.toString = function(){
    return this.title + ' ' + this.description;
}

console.log(task.toString());

/* Outra maneira. Porém usando os colchetes */

var task = {
    title: 'Olá Todos!!! De Novo!!!',
    description: 'Continuando a Programar.....'
}

task.toString = function(){
    return this.title + ' ' + this.description;
}

console.log(task.toString());