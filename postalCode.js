
function telephoneCheck(str) {
  // Good luck!
 var regExp= /^1?\s*(\(?)\d{3}(\)?)[\s|-]*\(?\d{3}(\)?)[\s|-]*\(?\d{4}(\)?)$/;
  reg=/\d{3}-\d{3}-\d{3}/;
 var matches = str.match(regExp);
  
  if(matches!==null &&matches.length>=1&&(matches[1]+matches[2]==="()"|matches[1]+matches[2]==="")&&(matches[3]+matches[4]==="()"|matches[3]+matches[4]===""))
  return true;
  return false;

 // return matches;
}



telephoneCheck("1 (555) 555-5555");
