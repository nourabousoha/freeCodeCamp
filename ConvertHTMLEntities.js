function convertHTML(str) {
    // &colon;&rpar;
    
    var dict = [["&","&amp;"],["<","&lt;"],[">","&gt;"]];
    dict.forEach(function(element) {
        reg = new RegExp(element[0]);
        
       str = str.replace(reg,element[1]);
      
    });
    return str
  }
  
 console.log( convertHTML("Dolce & Gabbana"));
  
