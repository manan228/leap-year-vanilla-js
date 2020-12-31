//storing the data into variables to use it in js

var input = document.querySelector("#input")
var process = document.querySelector("#process")
var output = document.querySelector("#output")

// When click it will call the onClick function
process.addEventListener("click", onClick)

function onClick() {

    var inputText = input.value;            //storing the input value
    
    if (inputText%4 == 0){                  //logic part

        output.innerHTML = "It is leap year"

    } else {

        output.innerHTML = "It is not a leap year"
    }
}