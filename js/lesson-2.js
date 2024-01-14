const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

//TODO:==============================================
// Отримати масив імен всіх користувачів (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// const getUserNames = (arr) => arr.map((user) => user.name);
// console.log(getUserNames(users));

//TODO:==============================================
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// const getUsersWithEyeColor = (users, color) =>
//   users.filter((user) => user.eyeColor === color);
// console.log(getUsersWithEyeColor(users, "blue"));

//TODO:==============================================
// Отримати масив імен користувачів за статтю (поле gender) за допомогою reduce
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// const getUsersWithGender = (users, gender) =>
//   users.reduce((arr, item) => {
//     if (item.gender === gender) {
//       arr.push(item.name);
//     }
//     return arr;
//   }, []);

// console.log(getUsersWithGender(users, "male"));

//TODO:==============================================
// Отримати масив користувачів віком від min до max
// console.log (getUsersWithAge (users, 20, 30));
// [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
// console.log (getUsersWithAge (users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

// const getUsersWithAge = (users, min, max) =>
//   users.filter((user) => user.age > min && user.age < max);

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));


//TODO:==============================================
//Зібрати в allTopics масив всіх предметів всіх курсів
//Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи
const courses = [
  {
    name: "Basic HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
  },
  {
    name: "Intermediate HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
  },
  {
    name: "Basic JavaScript",
    topics: [
      "VSCode",
      "Type system",
      "Loops",
      "Function",
      "Git",
      "Conditions",
      "Classes",
      "GitHub",
      "DOM",
    ],
  },
  {
    name: "Intermediate JavaScript",
    topics: [
      "VSCode",
      "NPM",
      "Bundlers",
      "Transpiling",
      "Git",
      "Promises",
      "AJAX",
      "GitHub",
    ],
  },
];

const allTopics = courses.flatMap(course => course.topics).filter((course, index, array) => array.indexOf(course) === index)
console.log(allTopics)

//TODO:==============================================
//Призначити знижку 20% на фрукти в масиві,
//Присвоїти ID для кожного продукту
const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

const toDiscount = fruits.map((fruit, index) => ({...fruit, price: fruit.price * 0.8, id: index+1}))
console.log(toDiscount)

