//BUBBLE SORT

// SOLUTION 1
 let unsortedArr = [10,5,9,7,10,1,2,5,4]

 let swapped;

 function bubbleSort(arr){
    swapped = false;
    // do not have to worry about the last number in the array
    let end=arr.length-1; 
    for(let i = 0, j=1; i< end; i++, j++){
        if(arr[i]>arr[j]){
            swapped=true;
            [arr[i],arr[j]] = [arr[j],arr[i]];

        }
    }
    end --;
    // decrement the end by 1 every time
 }
 do{
     bubbleSort(unsortedArr);
 }  while(swapped);

 console.log(unsortedArr);

// SOLUTION 2

const array= [6,4,5,3,2,1]


for (let i =0, size = array.length; i<array.length-1; i++){
    for(let j=0; j<size - 1 -i; j++){
        if(array[j] > array[j+1]){
            const temp=array[j];
            array[j]=array[j+1];
            array[j+1]=temp;
        }
    }
}
console.log(array);

///////////////////////////////////////////////////////////

// SELECTION SORT
// SOLUTION 1

const arr = [7, 9, 3, 5, 15, 10, 0];
//const arr= [7,9,3,5,15,10,0]; smallVal= 0

const selectionSort = arr => {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        let indexOfMin = i;

        for (let j = i + 1; j < len; j++){
            if(arr[j]< arr[indexOfMin]) indexOfMin= j
        }

        if(indexOfMin !== i){
            //swap
            const temp= arr[indexOfMin];
            arr[indexOfMin]=arr[i];
            arr[i]=temp

        }

    }
    return arr
}
selectionSort(arr);

// SOLUTION 2

function selectionSort(arr){
    for (var i = 0; i < arr.length; i++) {
        var minIdx = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[minIdx] > arr[j]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            var temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
    return arr;
}
console.log(selectionSort([1,5,2,8,3,4]));
//////////////////////////////////////////////////////////

// INSERTION SORT 
// SOLUTION 1

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++){
      var temp = arr[i];
      var j = i - 1;
      while (j >= 0 && arr[j] > temp){
          arr[j + 1] = arr[j];
          j--;
      }
      arr[j + 1] = temp;
  }
  return arr;
}
console.log(insertionSort([1, 5, 2, 8, 3, 4]));

///////////////////////////////////////////////////////////
//MERGE SORT - merging 2 sorted lists into 1 list

function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    const middle=Math.floor(arr.length/2);
    const left=arr.slice(0,middle);
    const right=arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let arr=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            arr.push(left.shift());
        }else{
            arr.push(right.shift());
        }
    }
    return arr.concat(left.slice()).concat(right.slice());
}
arr=[4,5,8,12,15,75,34,69];
mergeSort(arr);
/////////////////////////////////////////////////////////////
//QUICKSORT

function qsort(arr){
    if(arr.length <=1){
        return arr;
    }
    const[pivot, ...rest] =arr;
    const left=[], right = [];
    rest.forEach( el => el <pivot ? left.push(el) : right.push(el));
    return qsort(left).concat(pivot).concat(qsort(right));
}

console.log(qsort([5,3,12,43,33,23,4,0]))