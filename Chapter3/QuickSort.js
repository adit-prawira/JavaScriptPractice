function quickSort(inputArray){
    if(inputArray.length > 1){
        var left = [];
        var right = [];
        var NewArray = [];
        var pivot = inputArray.pop();
        var length = inputArray.length;

        for(var i  = 0; i <  length; i++){
            if(inputArray[i] > pivot){
                right.push(inputArray[i]);
            }

            if(inputArray[i] < pivot){
                left.push(inputArray[i]);
            }
        }

        return NewArray.concat(quickSort(left), pivot, quickSort(right));
    }else{
        return inputArray;
    }
}

arr = [3,0,2,5,-1,4,1];
console.log("Original Array:    "+arr);
console.log("Sorted Array:      "+quickSort(arr));