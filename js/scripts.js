// Task 1
console.log("Задача 1");
let i = 1;
while ( i <= 50 ) {
    console.log(i);
    i++;
}
    i = 35;
while ( i >= 8 ) {
    console.log(i);
    i--;
}
// Task 2
let n = 89;
    document.write('Задача 2');
while (n >= 11) {
    document.write("<br \/>", n)
    n--;
}
// Task 3
console.log("Задача 3");
let sum = 0;
for(let j = 0; j <= 100; j++) {
    sum += j;
}

console.log(sum);
// Task 4
console.log("Задача 4");
for (let r = 1; r <= 5; r++) {
    let sumT4 = 0;
        for (let w = 1; w <= r; w++) {
            sumT4 += w;
        }
        console.log(sumT4);
}
// Task 5
console.log("Задача 5");
let nT5 = 8;
while (nT5 <= 56) {         
    if(nT5 % 2 == 0) {               
        console.log(nT5);
    }
    nT5++;
}

for (nT5 = 8; nT5 <= 56; nT5++) {
    if(nT5 % 2 == 0) {
        console.log(nT5);
    }
}

for (nT5 = 8; nT5 <= 56; nT5++) {
    if(nT5 % 2 != 0) continue;
        console.log(nT5);  
}
// Task 6
console.log("Задача 6");
for ( let nT6 = 2; nT6 <= 10; nT6++) {
    for (let jT6 = 1; jT6 <= 9; jT6++) {
        let mulT6 = 0;
        console.log("",nT6, "*", jT6, "=", mulT6 = nT6 * jT6);
    }
}
// Task 7
console.log("Задача 7");
let nT7 = 1000;
let num = 0;
while (nT7 / 2 > 50) {
    nT7 = nT7 / 2;
    num++;
}

console.log("кол-во итераций:", num, " Число:", nT7);

// Task 8
console.log("Задача 8");
let sumT8 = 0;
    iT8 = 0;
    nT8 = 0;
while(true) {
    let nT8 = +prompt("Введите любое чосло");
    if (nT8 !== nT8) {
        console.log("Это не число", nT8, typeof nT8);
    break;
    } 
    if ((nT8 == 0) || (nT8 === "")) {
    break;
    }
    sumT8 += nT8;
    iT8++; 
} 

console.log("сумма:", sumT8, " Среднее арифметическое: ", sar = sumT8/iT8);
// Task 9
console.log("Задача 9");
let stringT9 = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
    stringObj = stringT9.split(" ");
    stringArr = stringObj.map(j=>Number(j));
    comVB = stringArr[0];
    comVL = stringArr[0];
        ups: for (let iT9 = 0;; iT9++) {
                if (!!!stringArr[iT9]) {
                break ups;
                }
                if (comVB <= stringArr[iT9]) {
                    comVB = stringArr[iT9];
                }
                if (comVL >= stringArr[iT9]) {
                    comVL = stringArr[iT9];
                }  

            }
            console.log("Самое большое число:",comVB);
            console.log("Самое маленькое число:",comVL);
// Task 10
console.log("Задача 10");
let nT10 = prompt("Введите произвольное число n");
    nObj = nT10.split('');
    bD = nObj.map(j=>Number(j));
    iT10 = 0;
    sumN = 0;
    anchor = 0;
    wow: for (iT10 = 0;; iT10++) {
        if (bD[iT10] !== bD[iT10]) {
            console.log("Это не число");
            anchor = 1;
            break wow;
        }
        if (typeof bD[iT10] == "undefined") {
            break wow;
        }
        console.log(bD[iT10]);
        sumN += bD[iT10]; 
    }
    if (anchor != 1) {
        console.log("Цифр в числе n:", iT10);
        console.log("Сумма цифр числа n:", sumN);
    }


        
    
