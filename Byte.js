//Recursion (adding)
//write a function that takes in a number as an argument


function rSums(num)
{
    if (num ==1){
        return 1;
    } else {
        return num + rSums(num-1);
    }
}
rSums(5)

//iFactorial(1) = 1                  => 1
//iFactorial(2) = 2 * 1              => 2
//make sure your solution is iterative and not recursive .
function iterativeFactorial(n){
    var multiplier = 1;

    for(var i =1; i <= n; i++){
        multiplier *=i
    }
    return multiplier
}
iterativeFactorial(2)


//recursive multiplication
function recursiveFactorial(n){
    if(n === 1){    //base case
        return 1;
    } else {
        return n * recursiveFactorial(n-1);
    }
}
recursiveFactorial(3)

//iFibonacci
// write a function iFibonacci that behaves like the following
// iFibonacci(0) = 0           => 0
// iFibonacci(1) = 1           => 1
// iFibonacci(2) = 1           => 1
// iFibonacci(3) = 1 + 1       => 2
// iFibonacci(4) = 1 + 2       => 3
// iFibonacci(5) = 2 + 3       => 5
// iFibonacci(6) = 3 + 5       => 8

//iterative
function iterativeFibonacci(n){
    var fibs= [0,1];

    for(i=0; i < n; i++){
        fibs.push(fibs[0] + fibs[1]);
        fibs.shift();
    }
    return fibs[0];
}
iterativeFibonacci(6)


//recursive
// rFibonacci(0) = 0                                  => 0
// rFibonacci(1) = 1                                  => 1
// rFibonacci(2) = rFibonacci(0) + rFibonacci(1)      => 1
// rFibonacci(3) = rFibonacci(1) + rFibonacci(2)      => 2
// rFibonacci(4) = rFibonacci(2) + rFibonacci(3)      => 3
// rFibonacci(5) = rFibonacci(3) + rFibonacci(4)      => 5
// rFibonacci(6) = rFibonacci(4) + rFibonacci(5)      => 8
function recursiveFibonacci(n){
    if(n === 1 || n ===2){
        return 1;
    } else {
        return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
    }
}

recursiveFibonacci(4)


//////////////////////////////////////////////////////////////
