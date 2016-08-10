# Curso - Practical Design Patterns in JavaScript

Curso abordando como desenvolver um código em JavaScript usando os conceitos de Design Patterns com a intenção de criar códigos limpos,
reutilizáveis e de fácil manuntenção e compreensão.

<blockquote>
"... each pattern represents our current best guess as to what arrangement of</br>
the physical environment will work to solve the problem presented."

<strong>~ Christopher Alexander</strong>
</blockquote>

### 1) Objetos em JavaScript: ###

- [Task Object](https://github.com/glaucia86/design-patterns-javascript-demos/blob/master/Objetos%20JavaScript/task.js)
- [Definindo Propriedades](https://github.com/glaucia86/design-patterns-javascript-demos/blob/master/Objetos%20JavaScript/property.js)
- [Herança](https://github.com/glaucia86/design-patterns-javascript-demos/blob/master/Objetos%20JavaScript/inheritance.js)

### 2) Padrão de Projeto: Criação ###

Padrão de Projeto de Criação é focado em manipular os mecanismos de criação de objetos onde os objetos são criados
de forma adequada para a situação que nós estamos trabalhando. A abordagem básica para a criação de objetos de outro modo
poderiam adicionar complexidade de um determinado projeto, enquanto esses padrões tem como objetivo resolver esse tipo de problema
por controlar o processo de criação.

Os Padrões de Projetos que estão na categoria de **Criação** são:

- Constructor
- Factory
- Abstract
- Prototype
- Singleton
- Builder

#### 2.1) Padrão: Constructor ####

Em linguagens de programação clássicas que são orientadas a objetos um construtor é um método especial usado
para inicializar um objeto recém-criado uma vez que a memória foi alocada para o inicializador. Em JavaScript,
como quase tudo é um objeto, na maioria das vezes estamos interessados nas construções dos objetos.

Objetos Construtores são usados para criar tipos específicos de objeto - tanto para preparar o objeto para uso e
aceitar argumentos que um construtor pode usar para definir valores das propriedades e métodos membros quando o
objeto é criado pela primeira vez.

<strong>Exemplo:</strong>
```
function ObjectName(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
    this.toString = function() {
        return this.param1 + ' ' + this.param2;
    }
}
```


