let arr = [];

function primeNum(num) {
    if (num == 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


outer: while (true) {
    let i = prompt("Enter Numeber : ");
    let number = Number(i);
    if (Number.isInteger(number)) {
        if (number < 1) {
            continue;
        } else if (number > 2) {
            for (let i = 2; i <= number; i++) {
                if (primeNum(i)) {
                    arr.push(i);
                }
            }
            alert("For n=" + i + " Prime Number are " + arr);
        } else if (number == 1 || number == 0 || number == 2) {

            alert("For n=" + i + " Prime Number are " + arr);

        } else {
            continue;
        }
    } else {
        continue;
    }
    break outer;
}