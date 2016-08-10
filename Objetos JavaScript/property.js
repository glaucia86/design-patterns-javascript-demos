var task = {
    title: 'Fala Pessoal!',
    description: 'Vamos Nessa!!!'
};

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: true,
    configurable: true
});

task.toString = 'olá';

console.log(Object.keys(task));