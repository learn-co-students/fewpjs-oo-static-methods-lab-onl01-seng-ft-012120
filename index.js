class Formatter {
  //add static methods here
  static capitalize(str) {
      return str[0].toUpperCase() + str.slice(1)
     
  }
  
  static sanitize(string) {
       return string.replace(/[^A-Za-z0-9\s-']+/g, '');
  }
  
  static titleize(str) {
   let arr =  str.split(" ") 
   let result = []
   const exclude = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
   for (let i = 0; i < arr.length; i++) {
       if (i === 0) {
           result.push(this.capitalize(arr[i]))
       }else {
           if (exclude.includes(arr[i])) {
               result.push(arr[i])
           }else {
            result.push(Formatter.capitalize(arr[i]))
           }
       }
   }
   return result.join(" ")
  }
  
}