// @param {string} name 
 function getNumberOfChars(name) {
    // return the number of characters in: name
return name.length
}

 function getFirstChar(name) {
    // return the first character of: name
return name.substring(0,1)
}

 function getLastChar(name) {
    // return the last character of: name
return name.substring(name.length-1)
}

 function getLower(name) {
    // return name all in lower case (example: "ABC" becomes "abc")
return name.toLowerCase()
}

 function getUpper(name) {
    // return name all in upper case (example: "abc" becomes "ABC")
return name.toUpperCase()
}

 function getCapitalized(name) {
    // return a capitalized version of name (example: "alEX" becomes "Alex")
return name[0].toUpperCase() + name.substring(1).toLowerCase()
}

 function getClean(name) {
    // return name without trailing and leading space (example: " alex " becomes: "alex")
return name.trim()
}