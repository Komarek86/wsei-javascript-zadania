function distFromAverage(inputArray) {
    var sum=0;
    for(var i=0; i<inputArray.length; i++) {
       sum+= inputArray[i];
    }
    var average = suma/inputArray.length;
    var newArray = [];
    for(var i=0; i<inputArray; i++) {
        newArray.push(inputArray[i]-average);
    }
    return newArray;
}

distFromAverage ([1,2,3,4,5,6,7]);