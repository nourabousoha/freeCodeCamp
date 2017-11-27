function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  str = str.replace(/(\w)([A-Z])/g,"$1"+"-"+"$2"); 
  return str.replace(/\s|_-/g,"-").toLowerCase();
}

spinalCase("The_Andy_Griffith_Show");
