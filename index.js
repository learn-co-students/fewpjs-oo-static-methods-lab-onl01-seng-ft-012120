class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '') 
  }

  static titleize(string) {
    const stringArray = string.split(" ")
    stringArray[0] = Formatter.capitalize(stringArray[0])
    return stringArray.map(function(e) {
      const nonCapWords = [ "the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
      if (!nonCapWords.includes(e)) {
        return Formatter.capitalize(e)
      } else {
        return e
      }

    }).join(" ")
  }
}