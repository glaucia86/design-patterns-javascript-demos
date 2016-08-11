
var Task = require('./task');

var task1 = new Task('Criando uma demo para constructors');
var task2 = new Task('Criando uma demo para modules');
var task3 = new Task('Criando uma demo para singletons');
var task4 = new Task('Criando uma demo para prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();