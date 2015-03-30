function largestTwoNumbers(array){
    if(array){
        var Max = Math.max.apply(Math, array);
        array.splice(array.indexOf(Max), 1);
        var SecondMax = Math.max.apply(null, array);
    }
    return (SecondMax + " and " + Max);
}
