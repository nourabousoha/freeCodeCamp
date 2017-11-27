function updateInventory(arr1, arr2) {
      // All inventory must be accounted for or you're fired!
  ///////////////////////////////////////////
      function  chequeUnique(ele,arr){
    var filtred =  arr.filter(function(e){
        if(e[1]===ele[1]){
        ele[0]=e[0];
        return false;
        }
        else{

          return true;
        }
      });
      return filtred;
   };
   /////////////////////////////////////////////////
    
   function compare (a,b){
    if (a[1] < b[1]) {
        return -1;
      }
      if (a[1] > b[1]) {
        return 1;
      }
      return 0;
};

////////////////////////////////////////////

 var  inv = arr1.reduce(function(acc,elem){
   var filter = chequeUnique(elem,acc);

    return filter;
 },arr2);
    return inv.concat(arr1).sort(compare);
    
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
