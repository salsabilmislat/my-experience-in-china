alert('welcome to china world')
var userName = prompt("type your name please")
var userAnswer = prompt("Is this your first time to search about china")

  document.write('<div>' + 'welcome  ' + userName + "</div>")
 function welcomingpart(){
if (userAnswer == "yes"){
alert('have a nice trip ' + userName)
}
else if (userAnswer == "no") {
  alert('enjoy your trip ' + userName)
}
else {
  alert('retype your Answer  ' + userName)
}
}

welcomingpart();

var pic=prompt("how many time do you want to see our welcoming picture?")
function picprint(){
if (userAnswer = "yes"){
  for (var i=0; i<pic ;i++){
document.write("<img src='data:image/jpeg;base64,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' height='100px' width='100px'/>" )
  }
  
}
}
picprint();

var capitalcity=prompt("what is the name of china capital city?")
function interingqustion(){
while (capitalcity != "beijing"){
  capitalcity=prompt("It not the name of china capital city! retype the answer again?  🤯 ")
}
alert("your Answer was right! Good job😉 ")
}
interingqustion();


