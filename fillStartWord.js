//const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  let a = startWord
  let b = word
if(b == null || b == undefined){
  return undefined
}else if (b.startsWith(a)) {
     return b
}else{
     return a + b
}

}

module.exports = fillStartWord

//console.log(fillStartWord("1-2565-","Hello World"))
//console.log(fillStartWord("JS","beginner"))
