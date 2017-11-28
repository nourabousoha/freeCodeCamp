
function pairwise(arr, arg) {
  var reduced = arr.reduce(function(acc,ele){
   
  var filtred = arr.filter(function(elem){
    return elem + ele === arg;
  });
  console.log(filtred);
   acc=acc.concat(filtred); 
   return acc;
   },[]);  
  return reduced;
}

console.log(pairwise([1,4,2,3,0,5], 7));
