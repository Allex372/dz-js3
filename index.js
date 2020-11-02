// -- створити об'єкт (не меньше 5ти властивостей) який описує

// ------------------------------------------------- собаку

// const dog={
//     name: 'Dugle',
//     colour: 'black',
//     eyes: 'darck-blue',
//     family: true,
//     age: 7,
// };
//
// ------------------------------------------------- людину

// const man = {
//     sex: 'male',
//     hair: 'black',
//     eyes: 'blue',
//     job: false,
//     age: 21
// }

//-------------------------------------------------car

// const car = {
//     brand: 'RR',
//     colour: 'black',
//     class: 'business',
//     price: 200000,
//     document: true
// }
//
//------------------------------------------------- квартиру

// const apartment = {
//     floor: 2,
//     room: 4,
//     square: 80,
//     people: 4,
//     street: 'Trilovskogo'
// }
//
//------------------------------------------------- книгу
//
// const book = {
//     name: 'ghosts of autumn',
//     author:'Nikkolasson',
//     size:'small',
//     page:'200',
//     color: 'dark'
// }
// console.log(man)
// console.log(car);
// console.log(apartment);
// console.log(book);

// -- Створити масив та вивести його в консоль:
//
// - 3 5 людей
// - з 5 автомобілів

//------------------------------------------------------------- з 5 собак
// const arrDog = ['haski', 'bulldog','pitbull', 'vivchar', 'dolmatines'];
// console.log(arrDog)

//-------------------------------------------------------------3 5 людей
// const arrPeople = ['man1', 'man2', 'woman1','woman2','manwoman'];
// console.log(arrPeople)

// ------------------------------------------------------------- з 5 автомобілів
// const arrCar = ['VW','Mercedes', 'AUDI', 'Rolls-Royce', 'Porsche'];
// console.log(arrCar)


// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом

// ------------------------------------------ будинок
// const house = {
//     color: 'white',
//     size:{
//         height:80,
//         width: 50,
//         square:10000
//     },
//     city: 'Lviv',
//     style: 'smart-house',
//     people:['son1', 'son2', 'mather', 'father']
// }
// console.log(house)

// ------------------------------------------ водій
// const driver = {
//     style:'car',
//     sex:'male',
//     car:{
//         carStyle:'business',
//         brand: 'AUDI',
//         color: 'gold'
//     },
//     family:[
//       'son','daughter','woman'
//     ],
//     name:'Allex'
// }
// console.log(driver)

// ------------------------------------------ іграшку

// const toy = {
//     style:'plastic',
//     sex:'male',
//     type:{
//         typeStyle:'soldier',
//         brand: 'toytoy',
//         color: 'green'
//     },
//     family:[
//         'soldier1','soldier2','woman'
//     ],
//     name:'Biggie'
// }
// console.log(toy)

// ------------------------------------------ стіл

// const table = {
//     style:'home',
//     material:'wood',
//     type:{
//         typeStyle:'home-style',
//         brand: 'woodmarket',
//         color: 'dark-red'
//     },
//     supports:[
//         'leftside1','leftside2','rightside1','rightside2'
//     ],
//     name:'WooodyWood'
// }
// console.log(table)

// ----------------------------------------- сумка

// const bag = {
//     style:'travel',
//     material:'poliflex',
//     type:{
//         typeBag:'water-roof',
//         brand: 'BagBox',
//         color: 'dark-blue'
//     },
//     supports:[
//         'leftside1','leftside2','rightside1','rightside2'
//     ],
//     name:'myLovely'
// }
// console.log(bag)


// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// ----------------------------- статус Андрія
// console.log(users[7].status);

// ------------------------------ статус Максима
// console.log(users[4].status);

// ------------------------------ ім'я передостаннього об'єкту
// console.log(users[9].name);

// ------------------------------ ім'я третього об'єкта
// console.log(users[2].name);

// ------------------------------ вік Олега
// console.log(users[6].age);

// ------------------------------ вік Олі
// console.log(users[10].age);

// ------------------------------ вік + ім'я 5го об'єкта
// console.log(users[4].age,users[4].name);

// ------------------------------ вік + сатус Анни
// console.log(users[5].age,users[5].status);


// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або
// document.getElementsByClassName або document.getElementsByTagName :

// - отримує текст з параграфа з id "content"
// let content = document.getElementById('content');
// console.log(content)

// - отримує текст з блоку з id "rules"
// let rules = document.getElementById('rules');
// console.log(rules)

// - замініть текст параграфа з id 'content' на будь-який інший
// let content = document.getElementById('content');
// content.innerText='BLABLABLA';

// - замініть текст параграфа з id 'rules' на будь-який інший
// let rulesText = document.getElementById('rules');
// rulesText.innerText = 'lorem10';

// - змініть кожному елементу колір фону на червоний
// let pEl = document.getElementsByTagName('p')
// for (const pElElement of pEl) {
//     pElElement.style.backgroundColor = '#ca1818'
// }
// let divEl = document.getElementsByTagName('div')
// for (const divElElement of divEl) {
//     divElElement.style.backgroundColor = '#ca1818'
// }
//
// let ulEL = document.getElementsByTagName('ul')
// for (const ulELElement of ulEL) {
//     ulELElement.style.backgroundColor='#ca1818'
// }



// - змініть кожному елементу колір тексту на синій
// let pEl = document.getElementsByTagName('p')
// for (const pElElement of pEl) {
//     pElElement.style.backgroundColor = '#1579d2'
// }
// let divEl = document.getElementsByTagName('div')
// for (const divElElement of divEl) {
//     divElElement.style.backgroundColor = '#1579d2'
// }
//
// let ulEL = document.getElementsByTagName('ul')
// for (const ulELElement of ulEL) {
//     ulELElement.style.backgroundColor='#1579d2'
// }

// - отримати весь список класів елемента з id=rules і вивести їх в console.log


// - отримати всі елементи з класом fc_rules
// console.log(document.getElementsByClassName('fc_rules'))

// - поміняти колір тексту у всіх елементів fc_rules на червоний

// let fc = document.getElementsByClassName('fc_rules');
// for (const fcElement of fc) {
//     fcElement.style.backgroundColor = '#ca1818';
// }