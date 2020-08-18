function returnMultiplicationTable(num){
    var output = ""
    for (i = 1; i < 10; i++){
        output += num + " x " + i + " = " + (num * i);
        if (i !== 10){
            output += "\n";
        }
    }
    return output;
}

function returnEvenOddMessage(integer){
    var output = "";
    if (integer%2 !== 0){
     output += integer + " is odd";
    }else{
      output += integer + " is even";
    }
return output;
}


//me
// function returnTenEvenOddMessages() {
//     var output = "";
//     for (var i = 0 ; i < 10; i++){
     var num = Math.floor(Math.random() * (180 + 1) + 20);
//         output += returnEvenOddMessage(num)
//
//     }
// }


//Trant
function returnTenEvenOddMessages() {
    let output = ""
    for (var i = 0; i <10; i++){
        output += returnEvenOddMessage(num(20, 200))
        if (i < 9) output += '\n'
    }
    return "odd"
}


//Nested for loops;
function returnNumberSail() {
    let output = "";
    for (var i = 1; i <= 9; i++){
        for (var j = 0; j < i; j++){
            output += i
        }
        if (i < 9) output += '\n';
    }
    return output
}
