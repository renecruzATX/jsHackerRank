class FenwickTree {
    constructor(arraySize) {
        this.arraySize = arraySize;
        this.treeArray = Array(this.arraySize + 1).fill(0);
    }
    update(position, value) {
        if (position < 1 || position > this.arraySize) {
            throw new Error('Position is out of allowed range');
        }
        for (let i = position; i <= this.arraySize; i += (i & -i)) {
            this.treeArray[i] += value;
        }
        return this;
    }
    read(position){        
        let sum = 0;
        for (let i = position; i > 0; i -= (i & -i)) {
            sum += this.treeArray[i];
        }
        return sum;
    }
}

// Complete the insertionSort function below.
function insertionSort(array) {
    let count = 0;  
    //Below worked but was too slow;
    // for(let i = 1; i < array.length; ++i) {
    //     let currentValue = array[i];        
    //     let j = i-1;
    //     while (j>=0 && array[j] > currentValue) {             
    //         array[j + 1] = array[j]; 
    //         --j;
    //         ++count; 
    //     }                 
    //     array[j + 1] = currentValue;  
    // }

    //Fenwick tree approach that works faster
    const bit = new FenwickTree(Math.pow(10, 7));
    for (let val of array.reverse()){
        bit.update(val, 1);
        count += bit.read(val-1);
    }   
    return count;
}