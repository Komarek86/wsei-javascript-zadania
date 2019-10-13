
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// ZADANIE 0

function checkArray(array)
{

}

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
    ];

// ZADANIE 1

// ZADANIE 2

// ZADANIE 3

function print2DArray(array2D) {
    array2D.forEach(element => {
        element.forEach(elem => {
           console.log(elem);
        })
    })
}
print2DArray(arr);

// ZADANIE 4

var new2DArray = [
    [1,2,2,3],
    [0,9,3,4],
    [11,2,3,5]
];
print2DArray(new2DArray);

// ZADANIE 5

function create2DArray(rows, columns) {
    var array = [];
    var temp = [];
    var x = 1;
    for(var i = 0; i < rows; i++) {
        for(var j = 0; j < columns; j++) {
            temp.push(x++);
        }
        array.push(temp);
        temp = [];
    }
    return array;
}
create2DArray(4,4); 