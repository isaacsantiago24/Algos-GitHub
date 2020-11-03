// CHALLENGE 1: REVERSE A STRING
//Return a string in reverse
//EX: reverseString('hello') ==='olleh'

//split()=used to split a string into an array of substrings and returns the new array
//reverse()=used to reverse the oder of the elements in an array //["Banana","Orange","Apple"] = ["Apple","Orange","Banana"]
//join()=returns the array into a string // ["Banana","Orange","Apple"] = Banana,Orange,Apple

//Solution 1
function reverseString(str){
    const strArr=str.split('') //split turns a string into an array and turns it into each character
    strArr.reverse();
    return strArr.join(''); //join turns it back into a string
}
console.log(reverseString('hello'));


//Solution 1a
function reverseString(str){
    return str
    .split('')
    .reverse()
    .join(''); 

}
console.log(reverseString('hello'));


//Solution 1b // Decrementing loop
function reverseString(str){
    let revString='';
    for(let i = str.length -1; i >=0; i --){
        revString = revString + str[i];

    }
    return revString;
}
console.log(reverseString('hello'));

//Solution 1c // Incrementing loop
function reverseString(str){
    let revString='';
    for(let i = 0; i <= str.length - 1; i ++){
        revString = str[i] + revString;

    }
    return revString;
}
console.log(reverseString('hello'));

//Solution 1d // For of loop
function reverseString(str){
    let revString='';
    for(let char of str){
        revString = char +revString;

    }
    return revString;
}
console.log(reverseString('hello')); //olleh

//Solution 1e // For each loop 
function reverseString(str){
    let revStr=''; 
    str.split('').forEach(function(char){ //turn string to array // forEach loop takes in a function
        revStr= char + revStr;
    });

    return revStr;

}
console.log(reverseString('how are you'));


//Solution 1e // For each //(cleaned up)
function reverseString(str){
    let revString='';
    str.split('').forEach(char => revString= char + revString); //turn string to array // forEach loop takes in a function

    return revString;

}
console.log(reverseString('hello'));

//solution 1f // Using reduce
function reverseString(str){
    return str.split('').reduce(function(revString, char){
        return char + revString;
    }, ''); //empty string is what we will begin with
}
console.log(reverseString('hello'));

//solution 1f // Using reduce // (cleaned up)
function reverseString(str){
    return str.split('').reduce((revString, char) => char + revString, '');
}
console.log(reverseString('hello'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 2: VALIDATE A PALINDROME
//Return true if palindrome and false if not
//EX: isPalindrome('racecar') === 'true', isPalindrome ('hello')== false

//Solution 1
function isPalindrome(str){
    const revString = str.split('').reverse().join('');  
    return revString === str; // will give true or false
    
}
console.log(isPalindrome('hello'));

//Solution 2
function isPalindrome(str){
    for(let i =0; i<(str.length/2|0); i++){
        if(str[i] !== str[str.length-i-1])
            return false;
        {
            return true;
        }
    }
}
console.log(isPalindrome('madam'));


//CHALLENGE 3: REVERSE AN INTEGER
//Return an integer in reverse
//EX: reverseInt(521) === 125

//concept of data types
function reverseInt(int){
    const revString = int.toString().split('').reverse()
    .join('');

    return parseInt(revString); //parseInt takes a string and turn it into an integer
}
console.log(reverseInt(-521) * Math.sign(int));

