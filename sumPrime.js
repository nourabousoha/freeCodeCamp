function isPrime(x){
  if(x==1||x==2)
    return true;
  for (i=2;i<x;i++){
    if(x%i===0){
      return false;
    }
  }
  return true;
}
function sumPrimes(num) {
  var sum =0;
  for(j=1;j<=num;j++){
    if(isPrime(j)){
      sum+=j;
    }
  }
  return sum;
}

console.log(sumPrimes(4));
