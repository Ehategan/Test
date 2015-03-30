function nEvenSum(array){
    var sum = 0;
    for (i = 0; i < array.length; i++){
        if ((array[i] % 2) === 0)
            sum += array[i];
    }
    return sum;
}
