
let action = "+"

while (action == "+" || action == "-" || action == "*" || action == "/") {

  let number = prompt("sondi kiriting")*1
  action = prompt("amalni kiriting")
  let number2 = prompt("sondi kiriting")*1

  if(action == "+"){
    console.log(number + number2);
  }
  if(action == "-"){
    console.log(number - number2);
  }
  if(action == "*"){
    console.log(number * number2);
  }
  if(action == "/"){
    console.log(number / number2);
  }
}