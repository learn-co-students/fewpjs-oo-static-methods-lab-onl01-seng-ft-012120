class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9\s-']+/g, '');
  }

  static titleize(string){
    let words = string.split(' ')
    const result = []
    const exclusions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (let i = 0; i < words.length; i++){
      if(exclusions.includes(words[i]) && i != 0){ 
        result.push(words[i])
      }
      else {
        result.push(this.capitalize(words[i]))
      }
    }
    return result.join(' ');
  }
}