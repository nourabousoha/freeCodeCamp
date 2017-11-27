function smallestCommons(arr) {
    var prodArr =[];
    var vPro ;
    var indice =-1;
    
    arr.sort(function(a,b){
      return a-b;
      
    });
    for (j=arr[0];j<=arr[1];j++){
      prodArr.push(j);
    }
   // vPro = product(prodArr);
    var k =2;
    while(indice===-1){
      var sum =0;
      
var l=0;
while(sum===0&&l<prodArr.length){
    if(k%prodArr[l]!==0){
        sum ++;
            }
            l++;
}

        if(sum!==0){
          k++;
        }
        else{
          indice=2;
        }
       
      
    }
    return k;
  }
  
  
  console.log(smallestCommons([23,18]));
  