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

//zad 4

var movie = {
    director: "Peter Jackson",
    writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    country: "New Zealand | USA",
    budget: "$93,000,000",
    imdbPoints: 8.8,
    year: 2001,
    time: "2h 58 min",
    category: " Adventure, Drama, Fantasy"
}
for(var x in movie) {
    if (movie.hasOwnProperty(x)) {
        var element = movie[x];
        console.log(element);
    }
}

//zad 5

var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

]
for(var i=0; i<animals.length;i++)
{
    for(var x in animals[i]) {
    if (animals[i].hasOwnProperty(x)) {
        var element = animals[i][x];
        console.log(element);
    }
}
}

//zad 6

//ZAD 6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;