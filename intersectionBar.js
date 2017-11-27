function sym(args) {
    var argus = Array.prototype.slice.call(arguments);
     argus.shift();
     //console.log(args);
     var changed = argus.reduce(function(acc,elem){
        // console.log(acc);
     // console.log(elem);
     var acc0 =acc;
     var reduced =acc.reduce(function(accu,e){
         return accu = elem.filter(function(f){
                  return e!==f;
         });
         return accu;
     },acc0);
      return acc.concat(reduced);   
     },[1,2,3]);
     return changed;
   }
   
  console.log( sym([1, 2, 3], [5, 2, 1, 4],[1,4,2,3]));
