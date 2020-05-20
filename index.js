class Formatter {
  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  static sanitize(word) {
    return word.replace(/[^A-Za-z0-9- '-]+/g, '');
  }

  static titleize(sentence) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = []
    let splitSentence = sentence.split(" ")
    for(let i = 0; i < splitSentence.length; i++) {
      if(i == 0) {
        result.push(this.capitalize(splitSentence[i]))
      } else {
        if(exceptions.includes(splitSentence[i])) {
          result.push(splitSentence[i])
        } else {
          result.push(this.capitalize(splitSentence[i]))
        }
      }
    }
    return result.join(" ")
  }
}

