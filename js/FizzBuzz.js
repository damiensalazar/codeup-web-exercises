function fizzBuzz (num){
    for (let i = 1; i <= num; i++){
        if (i % 15 === 0){
            console.log("fizzbuzz")
        }else if (i % 3 === 0){
            console.log("fizz")
        }else if (i % 5 === 0){
            console.log("buzz")
        }else{
            console.log(i);
        }
    }
}

// var i = 1;
// while(i <= num){
//     //fizzBuzz stuff
//     i++;
// }

fizzBuzz(30);


function average(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length;
}

function average(arr){
    var sum = 0;
    if (Array.isArray(arr)){
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
    } else {
        console.log('Enter an array')
    }
}
