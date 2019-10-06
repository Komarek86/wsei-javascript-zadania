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