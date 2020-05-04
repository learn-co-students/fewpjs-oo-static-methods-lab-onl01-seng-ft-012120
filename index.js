class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string){
    let sentence = string.split(' ');
    let nonTitle = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the']
    let first = true;
    return sentence.map(e => {
      if (nonTitle.some(string => string === e) === false || (first === true)){
        first = false; 
        return this.capitalize(e);
      }
      else return e;
    }).join(' ')
  }
}