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

// function sumNumber(min, max) {
//     let sum = 0
//     for (let i = min; i <= max; i++) {

//         if (i % 2 !== 0) {
//             continue
//         }
//         sum += i

//     }
//  return sum
// }
// console.log (sumNumber(0, 50))

// task 3

//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz
// function message(number) {
//   for (let i = 0; i < number; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else {
//       console.log(i);
//     }
//   }
//   return number;
// }

// console.log(message(35));

// task-4

//TODO:===================================
//~ Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
//~ значення '1', то у змінну result запишемо 'зима', якщо має значення
//~ '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.
// let valueSeason = prompt("Введіть число від 1 до 4");
// console.log(valueSeason);
// switch (Number(valueSeason)) {
//     case 1:
//         console.log("зима");
//         break;
//     case 2:
//         console.log("весна");
//         break;
//     case 3:
//         console.log("summer");
//         break;
//     case 4:
//         console.log("autumn");
//         break;
//     default:
//         console.log("invalid");
// }    