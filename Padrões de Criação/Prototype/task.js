var Task = function(name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function() {
        console.log('Completando o task...: ' + this.name);
        this.completed = true;
};

Task.prototype.save = function() {
        console.log('Salvando o Task.....: ' + this.name);
};

module.exports = Task;