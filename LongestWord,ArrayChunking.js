//CHALLENGE 1: LONGEST WORD
//Return the longest word of a string
//If more than one longest word, put into an array
//ex: longestWord('Hello, my name is Brad') === 'hello'
//ex: longestWord('Hello there, my name is Brad') === ['hello', 'there']

function longestWord(sen){
    //create filtered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    //sort by length
    const sorted = wordArr.sort(function(a,b){
        return b.length-a.length;
    });
    
    //if multiple words, put into array
    const longestWordArr = sorted.filter(function(word){
        return word.length === sorted[0].length;
    });
    //check if more than 1 array value
    if(longestWordArr.length ===1){
        //Return the word
        return longestWordArr[0];
    
    }else{
        return longestWordArr;
    }
}
console.log(longestWord('hello isaac how are you'));

//SOLUTION 1A
function longestWord(sen){
    //create filtered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    //sort by length
    const sorted = wordArr.sort((a,b)=> b.length-a.length);
    
    //if multiple words, put into array
    const longestWordArr = sorted.filter((word)=> word.length === sorted[0].length);
    //check if more than 1 array value
    if(longestWordArr.length ===1){
        //Return the word
        return longestWordArr[0];
    
    }else{
        return longestWordArr;
    }
}
console.log(longestWord('hello isaac how are you'));



//CHALLENGE 2: ARRAY CHUNKING 
//Split an array into chunked arrays of a specific length 
// ex: chunkArray([1,2,3,4,5,6,7], 3) === [[1,2,3],[4,5,6],[7]]
// ex: chunkArray([1,2,3,4,5,6,7],2) === [[1,2], [3,4],[5,6],[7]]

//SOLUTION 1
function chunkArray(arr,len){
    //Init chunked arr
    const chunkedArr = [];
    //Set index
    let i =0;
    
    //Loop while index is less than the array length
    while(i < arr.length){
        //Slice out from the index to the index + the chunk length and push on the chunked array
        chunkedArr.push(arr.slice(i,i+len));

        //increment by chunk length 
        i +=len;
    }

    return chunkedArr;
}

console.log(chunkArray([1,2,3,4,5,6,7],3))

//SOLUTION 2 For Each loop
function chunkArray(arr,len){
    const chunkedArr = [];

    //loop through array
    arr.forEach(function(val){
        //Get last element 
        const last = chunkedArr[chunkedArr.length - 1];

        //Check if last and if last length is equal to the chunk length
        if(!last || last.length === len){
            chunkedArr.push([val]);
        } else{
            last.push(val);
        }
    });
    return chunkedArr;
}

console.log(chunkArray([1,2,3,4,5,6,7],3))
