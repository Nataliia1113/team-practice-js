//~ У змінній min лежить число від 0 до 59. Визначте у котру чверть години
//~ Попадає це число (у першу, другу, третю або четверту).
// const min = 0;
// if (min <= 15) {
//     console.log("Перша чверть години");
// } else if (min <= 30) {
//     console.log("Друга чверть години");
// } else if (min <= 45) {
//     console.log("Третя чверть години");
// } else if (min <= 59) {
//     console.log("Четверта чверть години");
// } else {
//     console.log("Ви ввели число не в діапазоні від 0 до 59");
// }

// скористаємося циклом while та виведіть у консоль числа від 0 до 50

// let number = 0
// while (number <= 50) {
//     console.log(number)
//     number +=1
// }

//За допомогою циклу for додайте всі парні числа від min до max

function sumNumber(min, max) {
    let sum = 0
    for (let i = min; i <= max; i++) {
        
        if (i % 2 !== 0) {
            continue
        }
        sum += i
   
    }
 return sum
}
console.log (sumNumber(0, 50))