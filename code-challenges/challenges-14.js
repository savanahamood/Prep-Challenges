'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
// join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Input: "I did my waiting 12 years of it in Azkaban"
// Output: "Azkaban"
//
// Input: "Impossible"
// Output: "Impossible"
//

const LastWord = (str) => {
    // write your code here
    return str.slice(
        str.lastIndexOf(' ') + 1
    );
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
//  You can try to do the same task using the split method
//
//  Input: "you dare use my spells against me, potter"
//  Output: "potter"

const LastWord_2 = (str) => {
    // write your code here
   // return str.split(' ').pop();
    var n = str.split(" ");
    return n[n.length - 1];

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Input:  "I thought you had a plan"
// Output: "We thought you had a plan"
//
// Input: "I was there 3000 years ago"
// Output: "We were there 3000 years ago"

// Input: "I am Venom"
// Output: "We are Venom"
//

const replaceWords = (str) => {
    // write your code here
    let a = str.split(" ")
    if (a.indexOf("I") !== -1) {
        a.splice(a.indexOf("I"), 1, "We")
    }
    if (a.indexOf("am") !== -1) {
        a.splice(a.indexOf("am"), 1, "are")
    }
    if (a.indexOf("was") !== -1) {
        a.splice(a.indexOf("was"), 1, "were")
    }

    return a.join(" ")

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Write a function that "joins" the array of words together and puts a comma "," after every five words
//
// Input:["move","it","away","from","the","street"] 
// Output: "move it away from the, street" 
//

const arrToStr = (arr) => {
    // write your code here
    let result = []
    arr.map((el, i) => {
        if ((i + 1) % 5 == 0) {
            result.push(el + ",")
        }
        else {
            result.push(el)

        }
    })
    return result.join(" ")
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 05:
// Optional:
//
// Simon got a string manipulation question for his interview,
// it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// Input:"aaaa bbb sdf"
// Output: "a4 b3 s1d1f1"
//
// Input:"door"
// Output: "d1o2r1"
//
// help him by writing the function
//

const letterCounter = (str) => {
    // write your code here
    let letters = str.split("")
  console.log(letters)
    let frequences={}
    let freq= 1
    return letters.reduce((init, letter, i)=>{

    if(letter === " "){
    return init + " " 
    
    }
    else if(letters[i] === letters[i+1] ){    
    frequences[letter] = frequences[letter] + 1 ||  1
    return init + "" 
    }
    else if(letters[i] !== letters[i+1] ){
    
    frequences[letter] = frequences[letter] + 1 ||  1
    let num = frequences[letter]
    frequences[letter] =0 
    
    
    return init + letter+num
    }
     
      }, "")
        
}
// -------------------------------------------------------------------------------------------------------


module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };