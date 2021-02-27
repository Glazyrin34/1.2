"use strict";

function getResult(a,b,c){
    
    let x = [];
    let D = b ** 2 - 4 * a * c;
    
    if(D < 0) {
        return x;
    } else if (D === 0) {
        x.push ((-b + Math.sqrt(D)) / (2 * a));
    } else if (D > 0) {
        x.push((-b + Math.sqrt(D)) / (2 * a));
        x.push((-b - Math.sqrt(D)) / (2 * a));
    }
    
    return x;
}

function getAverageMark(marks) {

    let totalSum = 0;
    marks.splice(5);

    if (marks.length === 0) {
        return 0;
    }

    for (let i = 0; i < marks.length; i++) {
        totalSum += marks[i];
    }

    return totalSum/marks.length;;
 }

function askDrink(name,dateOfBirthday){

    let age = dateOfBirthday.getFullYear();
    let date = new Date().getFullYear();

    if ((date - age) >= 18) {
        return (`Не желаете ли олд-фэшн ${name}?`);
    } else {
        return (`Сожалею, ${name},но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`);
    }
}