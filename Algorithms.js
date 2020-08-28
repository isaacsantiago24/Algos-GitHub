//print all numbers 1-255

for (var i = 1; i <= 255; i++) {
    console.log(i)
}

// odd numbers 1-1000

for (var i = 1; i <= 1000; i = i + 2) {
    console.log(i);
}

//print sum of all odd numbers 1-5000

var sum = 0;
for (var i = 1; i <= 5000; i = i + 2) {
    sum = sum + i;
}

console.log(sum);


//iterating through array give an array 
// print the values in the array
// X [1,3,5,7,9,13]

var x = [1, 3, 5, 7, 9, 13];

    for (var i = 0; i < x.length; i++) {
        console.log(x[i])

}
//x[i] position x[1] , x[2]



//find max write a program that prints maximum number in the array
var x = [-3, 4, 5, 7];
var max = x[0];

for (var i = 1; i < x.length; i++) {
    if (x[i] > max) {
        max = x[i];
        //set the value of max to be x[i]
    }
}
console.log(max)

//Find the avg 
x = [1, 3, 5, 6, 20]

var sum = 0;
for (var i = 0; i < x.length; i++) {
    sum = sum + x[i];
}
var average = sum / x.length
console.log(average)

//Array with odd numbers contains all the odd numbers between 1 to 255
var y = [];
for (var i = 1; i <= 255; i = i + 2) {
    y.push(i);
}
console.log(y)

// greater than Y write a program that takes an array and returns the number of values in that array whose value is greater than y
var x = [1, 3, 5, 7]
var y = 3;

var count = 0;
for (var i = 0; i < x.length; i++) {
    if (x[i] > y) {
        count++;
    }
}
console.log(count)

//square the values in the array

function squareValue(arr) {
    for (var i = 0; i < x.length; i++) {
        x[i] = x[i] * x[i]
    }
    return arr;

}
x = [1, 5, 10, 4, -4]
squareValue(x)


//Eliminate the negative numbers
function noNeg(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
z = [1, 4, -5, -9, -10];
noNeg(z)

//Max , Min ,Avg
var x = [1, 5, 10, -2];
var max = x[0];
var min = x[0];
var sum = 0;

sum = sum + x[0]
for (var i = 1; i < x.length; i++) {
    if (x[i] > max) {
        max = x[i];
    }

    if (x[i] < min) {
        min = x[i];
    }
    sum = sum + x[i];
}

console.log('Max is', max);
console.log('Min is', min);
console.log('Average is ', sum / x.length)

//shifting the values
x = [1, 5, 6, 66, -2];

for (var i = 0; i < x.length - 1; i++) {
    x[i] = x[i + 1];
}
x[x.length - 1] = 0;
console.log(x)


//number to string, any negative number 


function numToString(arr) {
    for (var i = 0; i < x.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }

    }
    return arr;
}
x = [1, -4, -5, 10, 12]
numToString(x);

//random array
var arr = [];

for(var i=0; i< 10; i++)
{
    var random_int=Math.floor(Math.random() * 101);
    arr.push(random_int);
}
console.log(arr);

//swapping two values, first and last number of array have been switched


function swap(arr){
    var temp= arr[0];
    arr[0]=x[x.length-1];
    arr[arr.length-1]=temp;
    return arr;
}
x=[9,22,23,42,12]
swap(x);

//reverse values in the array

var arr = [1,3,5,7,9]
function reverse(arr){
    for(i=0; i<arr.length/2; i++){
        var temp= arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
}
reverse(arr);

//insert X in Y
function insert(x,y){
    for(i=arr.length; i>y;i--){
        arr[i]=arr[i-1];
    }
    arr[y]=x;
    return arr;
}

var arr=[1,3,5,7,9];
x=10;
y=2;
insert(x,y);

//5 REMOVING NEGATIVE NUMBERS using POP
// [0,-1,2,-3,4,-5,6] ---> [1,2,4,6]

function removeNegatives(arr)
{
    var numNegatives = 0;
    for(var idx=0; idx <arr.length; idx++)
    {
        if (arr[idx] < 0){
            numNegatives++;
        }
        else {
            arr[idx - numNegatives] = arr[idx];
        }
    }
    while (numNegatives--)
    {
        arr.pop();
    }

    return arr;
}
removeNegatives([0,-1,2,-3,4,-5,6])
