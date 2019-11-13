//ZAD 0a

const city = {
    capital:'Warsaw',
    population:1708000,
    president:'Duda',
    primeMinisters:['Jerzy Kwieciński','Marlena Maląg']
}

console.log(city.capital,city.population,city.president,city.primeMinisters);

//ZAD 0b
const timeMachine = {
    shape:'koło',
    model:'model',
    run: function(date,place) {
        console.log(`${date}: we are in ${place}`);
    }
}

console.log(`shape: ${timeMachine.shape}`);
console.log(`model: ${timeMachine.model}`);
timeMachine.run('2077-10-23', 'Boston');

//ZAD 1

const book = {
    title: '1984',
    author: 'George Orwell',
    numberOfPages: 288,
}
console.log(book.title,book.author,book.numberOfPages);

//ZAD 2

const person = {
    name: 'Borys',
    age: 23,
    sayHello: () => console.log('Hello')
}
console.log(person.name,person.age);
person.sayHello();

//ZAD 3

const recipe = {
    title: 'Surimi',
    servings: 4
}
recipe.ingredients = [
    'surimi',
    'rice',
    'sweet chilli sauce'
];
console.log(recipe.title,recipe.servings,recipe.ingredients);

//ZAD 6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);
//NIE ISTNIEJE