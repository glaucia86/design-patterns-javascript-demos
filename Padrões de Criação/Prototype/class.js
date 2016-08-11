'use strict'

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    };

    complete() {
        console.log('Completando o Task...: ' + this.name);
        this.completed = true;
    };

    save() {
        console.log('Salvando o Task....: ' + this.name);
    };
}

var task1 = new Task('Criando uma demo para constructors');
var task2 = new Task('Criando uma demo para modules');
var task3 = new Task('Criando uma demo para singletons');
var task4 = new Task('Criando uma demo para prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();