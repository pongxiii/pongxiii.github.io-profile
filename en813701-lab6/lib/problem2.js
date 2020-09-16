let arr = [];



function readInput(){ 
    let i = prompt("Enter an integer (a nagative integer to quit): ");
    number = parseInt(i);
        if (number > 0){
            arr.push(number)
            return number,arr;
        }else{
            return number,arr;
        }
    
}

function displayStats(number){
    let sum = arr.reduce(function(a, b){
        return a + b;
    }, 0);

    let avg = (sum/ arr.length).toFixed(2);

    
    return alert("For the list  "+arr +", the average is "+ avg +  ", the minumun is "+Math.min.apply(Math,arr)+ ", the maxinum is " + Math.max.apply(Math,arr)) ;
}


outer: while (true) {
    readInput();
    list = readInput;

   
    if (number < 0) {
       (arr == 0?  alert("For the list that is empty, the average is 0, the minimun is 0, and the maxinum is 0"): displayStats(list));
    }else if ( number >0){
        continue;
    
    }else{
        continue;
    }

    
break outer;
}