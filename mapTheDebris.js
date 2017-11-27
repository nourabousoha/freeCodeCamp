function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var PI = 3.1415;
    var orbits = arr.map(function(elem){
    var radius = elem.avgAlt +  earthRadius;  
    console.log(radius);  
    var  orbitalPeriod =Math.round( 2 *  Math.PI * Math.sqrt(Math.pow(radius, 3)/GM));
    elem.orbitalPeriod =orbitalPeriod;
    delete(elem.avgAlt);
    return elem;
    });
    
    return arr;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));