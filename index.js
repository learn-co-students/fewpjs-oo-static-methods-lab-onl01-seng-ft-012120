class Formatter {
  //add static methods here

  static capitalize(string) {
    console.log(`${string.charAt(0).toUpperCase()}   string slice is ${string.slice(1)}`);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    // for (i = 0; i < string.length; i ++) {
    //   if (string[i]) {
        
    // }
    // copied this from solution
    return string.replace( /[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize(string) {
    let arr = [];
    let words = string.split(" ");
    arr.push(words[0].charAt(0).toUpperCase() + words[0].slice(1));
    console.log(`string is ${string} words is ${words}`);
    for (let i = 1; i < words.length; i++) {
      if (words[i] === 'a' || words[i] === 'an' || words[i] === 'for' || words[i] === 'and' || words[i] === 'the'|| words[i] === 'but' || words[i] === 'of' || words[i] === 'at' || words[i] === 'by' || words[i] === 'from') {
        arr.push(words[i]);
      } else {
        // i = i[0].toUpperCase();
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        console.log(`wordsi is ${words[i]}`);
        arr.push(words[i]);
      }
    }
    console.log(`${arr.join(" ")}`);
    return arr.join(' ');
  }

}