var array=["gruszka","japko","sliwka","morela"];
console.log(array[0]);
console.log(array[array.length-1]);
for(var i=0; i<array.length; i++) {
    console.log(array[i]);
}
//---------------------
function printTable(array) {
    for(var i=0; i<array.length; i++) {
        console.log(array[i]);
    }
}

printTable([1,2,3,4]);
//--------------------
function multiply(array) {
    var sex = 1;
    for(var i=0; i<array.length; i++) {
        sex = sex * array[i];
    }
    return sex;
}

multiply([1,2,3,4,5,6,7]);
//--------------------
function getEvenAverage(array) {
    var sum = 0;
    var counter = 0;

    array.forEach(element => {
        if(element % 2 ===0) {
            sum = sum + element;
            counter++;
        }
    });
    
    if(counter===0) return null;
    return sum/counter;
}

console.log(getEvenAverage([1,2,3,4,5,6,7]));