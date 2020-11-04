//Challenge: CAPITALIZE LETTERS
//Return a string with the first letter of every word capitalized
//Ex: CapitalizeLetters('i love javascript') === 'I Love Javascript'

//Solution 1 
function CapitalizeLetters(str){
    const strArr = str.toLowerCase().split(' ');

    for(let i =0; i < strArr.length; i ++){
        strArr[i] = strArr[i].substring(0,1).toUpperCase()+ //plucking out the first letter then we uppercase the rest
        strArr[i].substring(1); 
    }

    return strArr.join(' ')//space because we are separating the words in an array not the characters
}
console.log(CapitalizeLetters('i love javascript'));

//Solution 2
function CapitalizeLetters(str){
    return str
    .toLowerCase()
    .split(' ')//split by word, add a space
    .map(function(word) {
        return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
}
console.log(CapitalizeLetters('i love javascript'));

//Solution 2a (clean up)
function CapitalizeLetters(str){
    return str
    .toLowerCase()
    .split(' ')//split by word, add a space
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}
console.log(CapitalizeLetters('i love javascript'));


//Solution 2b //regular expressions
function CapitalizeLetters(str){
    return str.replace(/\b[a-z]/gi,function(char){
        return char.toUpperCase();
    })
}
console.log(CapitalizeLetters('i love javascript'));


//CHALLENGE: MAX CHARACTER
//Return the character that is most common in a string
//EX: maxCharacter('javascript') == 'a'

function maxCharacter(str){
    const charMap = {};
    let maxNum=0;
    let maxChar=0;

    str.split('').forEach(function(char){
        if(charMap[char]){
            charMap[char]++;

        }else{
            charMap[char] =1;
        }
     });
    for(let char in charMap){ //loop through an object not an array
        if(charMap[char] > maxNum){
            maxNum = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}
console.log(maxCharacter('isaac')); //a



//CHALLENGE: FIZZBUZZ
//Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number,
//print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

//use modulus operator

//Solution 1
function fizzBuzz(){
    for ( var i=1; i <= 100; i++){
        if( i % 3 ===0 & i % 5 ===0){
            console.log("Fizz Buzz")
        } else if (i % 3 ===0){
            console.log("Fizz")
        } else if (i % 5 ===0){
            console.log("Buzz")
        }
        else{
            console.log(i);
        }
    }
}

console.log(fizzBuzz())

//Solution 1a
function fizzBuzz(){
    for ( var i=1; i <= 100; i++){
        if( i % 15 ===0){
            console.log("Fizz Buzz")
        } else if (i % 3 ===0){
            console.log("Fizz")
        } else if (i % 5 ===0){
            console.log("Buzz")
        }
        else{
            console.log(i);
        }
    }
}

console.log(fizzBuzz())