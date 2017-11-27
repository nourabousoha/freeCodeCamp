/*using a recursive version of the heap algorthm formula to 
find the possible pemutation of the set of character in the string str
*/

function permAlone(str) {
    function perms(data) {
        
        data = data.slice();  // make a copy
         var permutations = [],
             stack = [];
     
         function doPerm() {
             if (data.length == 0) {
                 permutations.push(stack.slice());
             }
             for (var i = 0; i < data.length; i++) {
                 var x = data.splice(i, 1);
                 stack.push(x);
                 doPerm();
                 stack.pop();
                 data.splice(i, 0, x);
             }
         }
     
         doPerm();
         return permutations;
     }
var input = str.split('');
var result = perms(input);
for (var i = 0; i < result.length; i++) {
    result[i] = result[i].join('');}

}
console.log(permAlone("abcdefa"));
