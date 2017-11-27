
function steamrollArray(arr) {
    // I'm a steamroller, baby
  var i=0;
  var indice;
  while(indice !==0){
  indice =0;
   var arr = arr.reduce(function(acc,elem){
       
        return  acc.concat(elem);
        
        },[]);
        for(i=0;i<arr.length;i++){
            if (Array.isArray(arr[i]))
            indice++;
          }        
   
  
}
return arr;
} 
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  