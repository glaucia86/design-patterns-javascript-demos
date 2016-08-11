var Task = function(name) {
    this.name = name;
    this.completed = false;

    this.complete = function() {
        console.log('Completando o task...: ' + this.name);
        this.completed = true;
    }

    this.save = function() {
        console.log('Salvando o Task.....: ' + this.name);
    }
}

var task1 = new Task('Criando uma demo para constructors');
var task2 = new Task('Criando uma demo para modules');
var task3 = new Task('Criando uma demo para singletons');
var task4 = new Task('Criando uma demo para prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();