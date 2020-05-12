class Formatter {
  //add static methods here
  
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  static sanitize(str) {
    return str.replace( /[^A-Za-z0-9 '-]/g, '' );
  }
  
  static titleize(str) {
    let wordsToTitlize = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    
    let splitStr = str.split(" ");
    let result = [];
    
    for (let i = 0; i < splitStr.length; i++) {
      if (i === 0) {
        result.push(this.capitalize(splitStr[i]));
      }
      
      else {
        if (wordsToTitlize.includes(splitStr[i])) {
          result.push(splitStr[i]);
        } 
        
        else {
          result.push(this.capitalize(splitStr[i]));
        }
      }
    }
    return result.join(" ");
  }
}