function checkForDuplicates(array){
    for (var i = 0; i < array.length; i++){
        if (array.indexOf(array[i]) !== array.lastIndexOf(array[i]))
            return false;   // duplicates in array
    } 
    return true;   // there are no duplicates in array
}
