//ZADANIE 0

function distFromAvarage(inputArray)
{
    var sum=0;
    for(var i=0; i<inputArray.length; i++)
    {
        sum+=inputArray[i];
    }
    var averge = sum/inputArray.length;
    var newArray = [];

    for(var i=0; i<inputArray.length; i++)
    {
        newArray.push(inputArray[i]-averge);
    }
    return newArray;
}

distFromAvarage([1,2,3,4,5,6,7]);

//ZADANIE 1

var array=["gruszka","jablko","sliwka","morela"];
console.log(array[0]," ", array[array.length-1]);
for(var i=0; i<array.length;i++)
{
    console.log(array[i]);
}

//ZADANIE 3

function printTable(array)
{
    for(var int i=0; i<array.length;i++){
        console.log(array[i]);
    }
}

printTable([1,2,3,4]);

//ZADANIE 4

function multiply(array)
{
    var multi=1;
    for(var i=0;i<array.length;i++)
    {
       multi=multi*array[i];
    }
    return multi;
}
multiply([1,2,3,4,5,6,7]);

//ZADANIE 5

function getEvenAvarage(array)
{
    var sum = 0;
    var counter = 0;
    array.forEach(element =>{
        if(element % 2===0)
        {
            sum=sum+element;
            counter++;
        }
    });
    if(counter===0) return null;
    return sum/counter;
}

console.log(getEvenAvarage([1,2,3,4,5,6,7]));