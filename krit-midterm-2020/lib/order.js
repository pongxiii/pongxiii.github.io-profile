
outer: while (true) {
    let i = prompt("Enter Numeber : ");
    let number = Number(i);
    if (Number.isInteger(number)) {
        if (number < 1) {
            continue;
     
        }else{
        alert("You would like to order " + number + " books");
        }
    } else {
    continue;
    }
break outer;
}