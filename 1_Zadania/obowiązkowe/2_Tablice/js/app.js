var array=["gruszka","japko","sliwka","morela"];
console.log(array[0]);
console.log(array[array.length-1]);
for(var i=0; i<array.length; i++) {
    console.log(array[i]);
}

function printTable(array) {
    for(var i=0; i<array.length; i++) {
        console.log(array[i]);
    }
}

printTable([1,2,3,4]);