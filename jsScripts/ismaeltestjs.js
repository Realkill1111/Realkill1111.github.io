
function mult(x, y){
    let result = x * y;
    return result;
}

function fiver(){
    let res = 0;
    for (let i = 0; i < 101; i +=5){
        res += i;
    }
    return res;
}

function wtf(x, y, z){
    let res = 0;

    switch (y) {
        case "+":
            res = x + z;
            break;
        case "-":
            res = x - z;
            break;
        case "*":
            res = x * z;
            break;
        case "/":
            if(z == 0){
                return "infinity";
            }
            res = x / z;
            break;
        default:
            return "invalid operator";
    }

    return res;
}

console.log(mult(2, 3)); // 6
console.log(fiver()); // 2550
console.log(wtf(2, "+", 3)); // 5
console.log(wtf(2, "-", 3)); // -1
console.log(wtf(2, "*", 3)); // 6
console.log(wtf(2, "/", 3)); // 0.6666666666666666
console.log(wtf(2, "/", 0)); // "infinity"
console.log(wtf(2, ")", 3)); // "invalid operator"