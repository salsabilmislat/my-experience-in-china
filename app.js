alert('welcome to china world')
var userName = prompt("type your name please")
var userAnswer = prompt("Is this your first time to search about china")

  document.write('<div>' + 'welcome  ' + userName + "</div>")
if (userAnswer == "yes"){
alert('have a nice trip ' + userName)
}
else if (userAnswer == "no") {
  alert('enjoy your trip ' + userName)
}
else {
  alert('retype your Answer  ' + userName)
}


var firstName = "salsabil "
var lastName = 'mislat'

var finalName = firstName + lastName
console.log(finalName)