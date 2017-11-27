/*
I used the heap algorthm to find possible permutation
*/

function permAlone(str){

//====================================================
function getPermutations(myStr){
   
    var permutations = [],  
        nextWord = [],         
        chars = []          
    ;
    //---------------------
    //split words into an array of characters
    
      chars = myStr.split('');//convert string into char array
   
    
    permutate(chars);
    return permutations;
   
    function permutate(chars){ //recursive: generates the permutations
        if(chars.length === 0)permutations.push(nextWord.join(''));            
        for (var i=0; i < chars.length; i++){
            chars.push(chars.shift());  //rotate the characters
            nextWord.push(chars[0]);    //use the first char in the array            
            permutate(chars.slice(1));  //Recurse: array-less-one-char
            nextWord.pop();             //clear for nextWord (multiple pops)
        }
    }
    //--------------------------------
}//==============END of getPermutations(str)=============
var result = getPermutations(str);

var myReg =/(.)\1+/g;
var noReputation = result.filter(function(elem) {
    return !elem.match(myReg);
  });
return noReputation.length;

}
console.log(permAlone("abcdefa"));