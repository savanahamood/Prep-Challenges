'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    //write your code here ...
   let arr = string.split('');
    let arr1 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i]);
    }
    arr1 = arr1.join("");

    return arr1;
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    //write your code here ...
    return arr.filter((el) => el.includes("^_^"));

}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    //write your code here ...
    let arr = str.split('');
    let arr1=[];
      for(let i=0;i<arr.length;i+=2){
    arr1.push(arr[i]); }
      return arr1.join("")
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {

    //write your code here ...
    let arr1=[];
  let arr2=[];
  let arr3=[]
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
     // arr1.push(arr[i][j].filter.includes("chicken"));
      //arr1= arr[i][j].filter((el) => el.includes("chicken"));
          arr1.push(arr[i][j])
         arr2=arr1.filter((el) => el.includes("chicken"));

    }
    arr1=[arr2]
    arr3.push(arr2);
    }
    return arr3
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
