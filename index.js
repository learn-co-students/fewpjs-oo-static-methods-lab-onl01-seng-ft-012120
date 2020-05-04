class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^0-9a-z\s'-]/gi, '')
  }

  static titleize(str) {
    const strArray = str.split(" ");
    strArray[0] = strArray[0][0].toUpperCase() + strArray[0].slice(1);
    for (let x = 1; x < strArray.length; x++) {
      if (strArray[x].toLowerCase() === 'the' 
      || strArray[x].toLowerCase() === 'a' 
      || strArray[x].toLowerCase() === 'an' 
      || strArray[x].toLowerCase() === 'but' 
      || strArray[x].toLowerCase() === 'of' 
      || strArray[x].toLowerCase() === 'and' 
      || strArray[x].toLowerCase() === 'for' 
      || strArray[x].toLowerCase() === 'at' 
      || strArray[x].toLowerCase() === 'by' 
      || strArray[x].toLowerCase() === 'from') {
        strArray[x] = strArray[x].toLowerCase();
      } else {
        strArray[x] = strArray[x][0].toUpperCase() + strArray[x].slice(1);
      }
    }
    return strArray.join(" ");
  }
}