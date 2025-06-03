let student = {
    firstName: "Yura",
    lastName: "Gulyaev",
    age: 23,
    faculty: "JS"
}
console.log(`${student.firstName} ${student.lastName} is ${student.faculty}`);

let listBooks = ['Книга 1', 'Книга 2'];

console.log(listBooks[0]);
console.log(listBooks[1]);

const add2 = function (x) {
    return x + 2;
}
console.log(add2.toString());
console.log(add2(10));

const uniKey = Symbol();
console.log(uniKey.toString());
const uniKey2 = Symbol('test');
const uniKey3 = Symbol('test');
console.log(uniKey2.toString());
console.log(uniKey2 == uniKey3); //false - символы создаются уникальными

//практика 
/*
Текст задания
1. Создайте переменную num и присвойте ей значение 123. Выведите
значение этой переменной в консоль
2. Создайте переменную а и присвойте ей значение 5, переопределите
переменную а на значение 7, выведите переменную а в консоль
3. Создайте переменную b. Запишите в нее сумму чисел 1, 2 и 3. С
помощью функции console.log выведите в консоль содержимое
переменной b.
4. Создайте 2 вида комментариев в вашем коде, добавьте в них
произвольный текст
*/
/*
const num = 123;
let a = 5;
a = 7;
console.log(a);

let b = 1 + 2 + 3;
console.log(b);
*/
/*
Создайте переменную c со значением 10 и переменную d со
значением 2.
a. Все созданные переменные должны быть логично названы
b. Создайте переменную суммы и присвойте сумму чисел (c,d)
c. Создайте переменную разности и присвойте разность чисел
(c,d)
d. Создайте переменную прозведения и присвойте произведение
чисел (c,d)
e. Создайте переменную частного и присвойте деление чисел
(c,d)
f. Выведите в консоль все созданные переменные
g. Сложите все созданные переменные и выведите результат в
консоль
*/
/*
const c = 10;
const d = 2;
const sum = c + d;
const sub = c - d;
const com = c * d;
const priv = c / d;
console.log(sum, sub, com, priv);
console.log(`all sum = ${sum + sub + com + priv}`);
*/

/*
Запишите в переменную a число 1.5, а в переменную b - число 0.75.
Найдите сумму значений этих переменных и выведите ее на экран.
2. Создайте переменную a, запишите в нее какое-нибудь
положительное или отрицательное число. Выведите на экран это
число с обратным знаком.
*/
/*
let a = 1.5;
let b = 0.75;
console.log(a + b);
a = -5;
console.log(-a);
*/
/*
Создайте строку с вашем именем и строку с вашей фамилией.
Выведите эти данные в консоль
2. Создайте переменную с текстом 'java' и переменную с текстом
'script'. С помощью этих переменных и операции сложения строк
выведите в консоль строку 'javascript'.
3. Создайте переменную с текстом 'hello' и переменную с текстом
'world'. С помощью этих переменных и операции сложения строк
выведите в консоль строку 'hello world'.
*/
/*
const myFirstName = 'Yura';
const myLastName = 'Gulyaev';
console.log(`${myFirstName} ${myLastName}`);

const java = 'Java';
const script = 'Script';
console.log(java + script);

const hello = 'Hello';
const world = 'World';
console.log(`${hello} ${world}`);
*/

/*Задание 1
Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
Вывести в консоль температуру в Цельсиях и Фаренгейтах.
*/
const cels = 15;
const fahrenheit = (9 / 5) * cels + 32;
console.log(fahrenheit);
/*
Задание 2
Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль.
*/
const name = 'Yura';
const admin = name;
console.log(admin);

//сравнение значений
let numberFromSting = Number('12');
console.log(numberFromSting - 1);

let stringNumber = '12';
console.log(!true);
console.log(!!stringNumber);

//Методы alert, prompt, confirm
/*
let personName = prompt('Введите Ваше имя');
alert(`Добро пожаловать ${personName}`);
*/

//Операторы if, if-else
let x = 10;
let y = 12;
if (x > 7) {
    console.log(x + y);
} else {
    console.log(x * y);
}

//Тернарный оператор
let max = (x > y) ? x : y;
console.log(max);

/*Текст задания
1. Создать новый файл lesson2.html
2. Создать переменную и спросить у пользователя “Ваш
возраст”
3. Вывести на экран текст. Вам “возраст пользователя” лет
4. Спросить у пользователя его имя
5. Вывести на экран, Добро пожаловать на сайт “Имя
пользователя”
*/
/*
const yoursNmae = prompt('как Вас зовут?', 'Введите имя');
const yoursAge = prompt('Сколько Вам лет', 'Введите возрост');
console.log(`Добро пожаловать ${yoursNmae}, Вам ${yoursAge} лет`);
*/

/*
Сознательно допустите ошибку в вашем коде. Убедитесь, что
ошибка появляется в консоли. Определите, в какой строке кода
случилась ошибка.
2. Необходимо вывести в консоль результат суммы данных
переменных
a. let a = '2';
b. let b = '3';
3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль
вывести текст
a. Сумма чисел равна “результат”
b. Разность чисел равна “результат”
c. Произведение чисел равно “результат”
d. Частное чисел равно “результат”
e. Остаток от деления чисел равен “результат”
*/
/*
let a = '2';
let b = '3';
console.log(a * b);

const firstNumber = Number(prompt('Введите первое число', 'первое любое число'));
const lastNumber = Number(prompt('Введите второе число', 'второе любое число'));

console.log(`Сумма чисел равна ${firstNumber + lastNumber}`);
console.log(`Разность чисел равна ${firstNumber - lastNumber}`);
console.log(`Производная чисел равна ${firstNumber * lastNumber}`);
console.log(`Частное чисел равна ${firstNumber / lastNumber}`);
console.log(`Остаток чисел равна ${firstNumber % lastNumber}`);
*/
/*
Пользователь с клавиатуры вводит число, Необходимо создать
условный оператор который
a. Выводит в консоль “Число больше 5”
b. Выводит в консоль “Число меньше 5”
c. Выводит в консоль “Число равно 5”
2. Даны переменные test1 и test2. Проверьте, равны ли их значения и
выведите соответствующее сообщение.
3. Пользовать с клавиатуры вводит 2 числа
a. Необходимо найти какое из двух чисел минимальное
4. Пользователь с клавиатуры вводит число, Проверьте, что данная
переменная больше нуля и меньше 15.
*/
/*
const newNumber = Number(prompt('введите любое число', 'ЧИЛО'));

if (newNumber > 5) {
    console.log(`${newNumber} больше 5`);
} else if (newNumber < 5) {
    console.log(`${newNumber} меньше 5`);
}
    else {
    console.log(`${newNumber} равно 5`);
}
*/
/*
const test1 = 2;
const test2 = 1;

if (test1 === test2) {
    console.log('переменные равны');
} else {
    console.log('переменные не равны');
}

const firstNumber = Number(prompt('первое число'));
const lastNumber = Number(prompt('второе число'));

if (firstNumber > lastNumber) {
    console.log(`${firstNumber} больше ${lastNumber}`);
}   else if (firstNumber < lastNumber) {
    console.log(`${firstNumber} меньше ${lastNumber}`)
}
    else {
    console.log(`${lastNumber} равно ${firstNumber}`);
}
*/
/*
const number = Number(prompt('введите лбое число', 'число'));

if (number > 0 && number < 15) {
    console.log(`${number} больше 0 и меньше 15`);
} else if (number < 0) {
    console.log(`${number} меньше 0`);
} else if (number === 15) {
    console.log(`${number} равно 15`);
}
else {
    console.log(`${number} больше 15`);
}
*/


