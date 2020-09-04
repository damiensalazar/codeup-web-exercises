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

function factors(n)
{
    var num_factors = [], i;

    for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
        if (n % i === 0)
        {
            num_factors.push(i);
            if (n / i !== i)
                num_factors.push(n / i);
        }
    num_factors.sort(function(x, y)
    {
        return x - y;});  // numeric sort
    return num_factors;
}
 console.log(factors(10));
console.log(factors(15));
console.log(factors(30));

function calculate(num) {
    var str = "0";
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            str += ',' + i;
        }
    }
    console.log(str);

}

calculate(50);

let getFactors = function (input){
    let answerArray = [];
    for(let i = 1; i  <= input; i++){
        if (input % i === 0) {
            answerArray.push();
        }
    }
    console.log(getFactors(10))
}
function factors(arr){
    var theFactors = [];
    if (Array.isArray(arr)){
        for (var i = 0; i < arr.lengthl i++){
            if(Number.isInteger(arr[i])){
                for (var n = 1; n <= arr[i]; n++){
                    if (arr[i] % n === 0){
                        theFactors.unshift(n);
                        //continue

                    }
                }
            }
        }
    }
    console.log(theFactors)
}
factors([10, 9, 100])

function fastFactor(num){
    var output = 'List of factors of ' + num + ": "
    if (num < 0) num *= -1;
    if (num === 1) {
        output += num;
    }
    var limit = num;
    for (var i = 2; i <limit; i++){
        if (num % i === 0) output += ' ' + i;
        limit /= i;
    }
    output +=
    return output
}


