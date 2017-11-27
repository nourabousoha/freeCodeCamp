function uniteUnique() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
  var flattened = args.reduce(function (acc, b) {
    console.log(acc);
    reduce = b;
    var filtred =b;
    for (i = 0; i < acc.length; i++) {

      filtred = filtred.filter(function(val){
        return acc[i]!==val;
      })
    }
    return acc.concat(filtred);
  }, []);
  console.log(flattened);
  //console.log(args);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
