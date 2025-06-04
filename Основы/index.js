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

/*
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
*/
/*
const num1 = Number(prompt('первое число'));
const num2 = Number(prompt('второе число'));

if (num1 === 1) {
    console.log(`${num1} равно 1`);
} else if (num1 < 1) {
    console.log(`${num1} меньше 1`);
}

if (num2 === 3) {
    console.log(`${num2} равно 3`);
} else if (num2 > 3) {
    console.log(`${num2} больше 3`);
}
*/
/*Перепишите код к тернарному оператору

let test = true;
if (test === true) {
console.log('+++');
} else {
console.log('---');
}
*/
let test = true;
console.log((test === true) ? '+++' : '---');

/*
В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
*/
const day = 12;

if (day > 0 && day <= 9 ) {
    console.log(`${day} попадает в первую декаду месяца`)
} else if (day > 9 && day <= 20 ) {
    console.log(`${day} попадает в вторую декаду месяца`)
} else if (day > 20 && day <= 31 ) {
    console.log(`${day} попадает в втретью декаду месяца`)
}
/*
Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.
*/
/*
const isNum = Number(prompt('Ведите число'));

const hundreds = Math.trunc(isNum%1000/100);
const dozens = Math.trunc(isNum%100/10);
const units = Math.trunc(isNum%10);

alert(`В числе ${isNum} количество сотен: ${hundreds}, десятков: ${dozens}, единиц: ${units}`);
*/

//ФУНКЦИИ
/*
const ivanov = 4.5;
const petrov = 3.7;
const sidorov = 3.2;

let scholarshipIvanov = 0;
if (ivanov > 3.4 && ivanov < 4) {
    scholarshipIvanov = 5000;
} else if (ivanov > 4) {
    scholarshipIvanov = 7500;
}

let scholarshipPetrov = 0;
if (petrov > 3.4 && petrov < 4) {
    scholarshipPetrov = 5000;
} else if (petrov > 4) {
    scholarshipPetrov = 7500;
}

let scholarshipSidarov = 0;
if (sidorov > 3.4 && sidorov < 4) {
    scholarshipSidarov = 5000;
} else if (sidorov > 4) {
    scholarshipSidarov = 7500;
}

console.log(scholarshipIvanov);
console.log(scholarshipPetrov);
console.log(scholarshipSidarov);
*/
//реализация вышеприведенного примера с помощью функции

function getScholarship(academicPerformance) {
    if (academicPerformance < 3.4) {
        return 0;
    }
    if (academicPerformance < 4) {
        return 5000;
    } else {
        return 7500;
    }
}

const ivanov = 4.5;
const petrov = 3.7;
const sidorov = 3.2;

let scholarshipIvanov = getScholarship(ivanov);
let scholarshipPetrov = getScholarship(petrov);
let scholarshipSidarov = getScholarship(sidorov);

console.log(scholarshipIvanov);
console.log(scholarshipPetrov);
console.log(scholarshipSidarov);

const sum1 = function(a, b) {
return a + b;
}
// Код с использованием стрелочной функциии
const f = (a,b) => a + b;

function goRiddle() {
    function riddles(question, answer) {
        let userAnswer = prompt(question);
        userAnswer = userAnswer.toLocaleLowerCase();
        if (userAnswer === answer) {
            alert('верно')
        } else {
            alert('не верно');
        }
    }
    riddles('Не лает, не кусает, а в дом не пускает', 'замок');
    riddles('Сто одёжек и все без застежек', 'капуста');
}
/*
// Плохие имена функций.
const user = nameOfUser(); // Понятно, что функция что-то делает с именем
пользователя. Можно догадаться, что получает его имя, но для полного понимания
надо заходить в функцию.
const hourlyRate = rateTable(user); // Тут непонятно, что делает функция.
Может, она устанавливает какой-то рейт для пользователя или возвращает его
рейт.
const workedHours = tableOfhours(user); // То же самое, что и выше.
const result = salary(hourlyRate, workedHours); // Ну и, как результат, мы
получаем зарплату пользователя, а может быть, сравниваем внутри что-то.
// Ещё один пример плохого имени, когда функция делает больше, чем положено.
Const access = getUserByNameSaveDBAuth(user);
// Хорошие имена функций — код читается как книга и всё понятно.
const user = getUserFromDB();
const hourlyRate = getUserHourlyRate(user);
const workedHours = getUserWorkedHours(user);
const result = calculateUserSallary(hourlyRate, workedHours);
// Тут мы видим, что получаем пользователя из базы данных, потом получаем его
часовую ставку и количество отработанных этим пользователем часов и в итоге
рассчитываем его зарплату.
*/

/*Написать функцию, которой передаем, имя, фамилия и
возраст, и получаем строку "Привет Иван Петров с
возрастом 17" (только здесь данные, которые были
переданы в функцию)
2. Создайте функцию которая возводит переданное число в
квадрат
3. Сделайте функцию, которая параметром принимает
число и проверяет, положительное это число или
отрицательное. В первом случае пусть функция выводит
в консоль текст '+++', а во втором '---'.
*/

function user(name, lastName, age) {
    return `Привет ${name} ${lastName} с возростом ${age} лет`;
}
console.log(user('Yura', 'Gulyaev', 31));

function squareNumber(number) {
    return number * number;
}
console.log(squareNumber(6));

function checkNumber(number) {
    if (number > 0) {
        return '+++'
    } else if (number < 0) {
        return '---'
    }
}
console.log(checkNumber(-5));

/*
Сделайте функцию, которая параметрами принимает 3 числа и
выводит в консоль сумму этих чисел.
2. С помощью созданной вами функции выведите в консоль сумму
значений этих переменных.
let param1 = 1;
let param2 = 2;
let param3 = 3;
1. Дана фукнция
function func(num = 5) {
console.log(num * num);
}
Расскажите, каким будет результат каждого из вызовов функции.
func(2);
func(3);
func();
*/

const param1 = 1;
const param2 = 2;
const param3 = 3;

function sumTreeMumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(sumTreeMumbers(param1, param2, param3));

function func(num = 5) {
console.log(num * num);
}

func(2); //4
func(3); //9
func(); //25

/*Сделайте функцию, которая параметром принимает число, а
возвращает квадратный корень из этого числа. С помощью этой
функции найдите корень числа 3, затем найдите корень числа 4.
Просуммируйте полученные результаты и выведите их в консоль.
2. Создайте функцию, которая находит минимальное число из 2х
передаваемых аргументов функции
*/
function squareRoot(num) {
    return Math.sqrt(num)
}

const a = squareRoot(4);
const b = squareRoot(9);
const sum = a + b;
console.log(sum);

function findMin(num1, num2) {
    return Math.min(num1, num2)
}
console.log(findMin(a, b));

/*Сделайте функцию, которая принимает параметром число от 1 до 7,
а возвращает день недели на русском языке.
2. Написать функцию, которой передаем имя и она возвращает
приветствие в зависимости от времени суток (Доброе
утро\день\вечер\ночи Иван)*/

function getDay(day) {
    switch (day) {
        case 1:
            return 'Понедельник';
            break;
        case 2:
            return 'Вторник';
            break;
        case 3:
            return 'Среда';
            break;
        case 4:
            return 'Четверг';
            break;
        case 5:
            return 'Пятница';
            break;
        case 6:
            return 'Суббота';
            break;
        case 7:
            return 'Воскресенье';
            break;
        default: 
        return 'Не верное число';
    }
}
console.log(getDay(7));

function greet(name) {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 12) {
        return `доброе утро ${name}`;
    } else if (hour >= 12 && hour < 18) {
        return `добрый день ${name}`;
    } else if (hour >= 18 && hour < 24) {
        return `добрый вечер ${name}`;
    } else {
        return `доброй ночи ${name}`;
    }
}
console.log(greet('Юра'));

/*Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
*/
function cubeNumber(num) {
    return num * num * num;
}
const q = cubeNumber(2);
const w = cubeNumber(3);
const sumQw = q + w;
console.log(sumQw);

/*Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
*/
/*
function inputSomeValue() {
    const userAnswer = prompt('Введите число');

    if (isNaN(userAnswer)) {
        return alert('Значение задано не верно');
    } else {
        return alert('Правильно! Вы ввели число!');
    }
}
console.log(inputSomeValue());
*/
const cache = 10000;
const tax = cache * 0.13;
const salary = cache - tax;

function procentMony(mony) {
    return `Размер заработной платы за вычетом налогов равен ${mony}`;
}

console.log(procentMony(salary));

/*Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
*/
/*
const numberOne = Number(prompt('Введите первое число'));
const numberTwo = Number (prompt('Введите второе число'));
const numberFree = Number (prompt('Введите третье число'));

function getNumberMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log(getNumberMax(numberOne, numberTwo, numberFree));
*/
/*Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
*/

function sum2(a, b) {
    return a + b;
}

function sub(a, b) {
    if (a > b) {
        return a - b;
    } else {
        return b - a;
    }
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

console.log(sum2(2, 6));
console.log(sub(2, 3));
console.log(mult(8, 7));
console.log(div(5, 7));

//Циклы и массивы
/*
const number = Number(prompt('значение N'));
let i = 1;
while (i <= number) {
    console.log(i++);
}*/
/*
let pass = Number(prompt('введите пароль в числовом формате'));
while (pass !== 123) {
    pass = Number(prompt('введите пароль в числовом формате'));
}*/
/*
let pass;
do {
    pass = Number(prompt('введите пароль в числовом формате'));
} while (pass !== 123);*/
/*
const number = Number(prompt('введите число N'));

for (let i = 1; i <= number; i++) {
    console.log(i);
}*/
//2. Если нам требуется сначала что-то сделать, а потом уже реализовать проверку, то тут к
//нам на помощь придёт do while
//3. Если нас интересует счетчик или возможно потребуется считать что либо, то это
//определённо for

//Массив и его методы

const students = ['Ivanov', 'Petrov','Sidorov'];
const studentsPraticeTimes = [20, 135, 87];

let fullPracticeTime = 0;
for (let index = 0; index < students.length; index++) {
fullPracticeTime = fullPracticeTime + studentsPraticeTimes[index];
console.log(students[index], ' - practice time: ', studentsPraticeTimes[index]);
}

console.log('Full practice time: ', fullPracticeTime);

const students2 = [];

students2.push('Иванов');
students2.push('Петров');
students2.push('Сидоров');

console.log(students2);
//push
const students3 = [];

students3.push('Иванов', 'Петров', 'Сидоров');
console.log(students3);
//pop
const students4 = ['Иванов', 'Петров', 'Сидоров'];

const lastStudents4 = students4.pop();
console.log(lastStudents4);
console.log(students4);
//shift
const students5 = ['Иванов', 'Петров', 'Сидоров'];

const firstStudents = students5.shift();
console.log(firstStudents);
console.log(students5);
//slice
const newStudents = ['Иванов', 'Петров', 'Сидоров'];

const newStudents2 = newStudents.slice();
newStudents2.push('Белкин');

console.log(newStudents);
console.log(newStudents2);

const firstTwoStudents = newStudents2.slice(0, 2);
console.log(firstTwoStudents);

//indexOf

const newStudents3 = ["Ivanov", "Petrov", "Sidorov", "Alexandrov", "Belkin", "Avdeev"];

if (newStudents3.indexOf('Ivanov') !== -1) {
    console.log('среди студентов есть Иванов');
}

const indexOfBelkin = newStudents3.indexOf('Belkin');
console.log(indexOfBelkin);


const products = ['Кофта', 'Куртка', 'Футболка', 'Брюки'];
console.log('Список всех товаров:');
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

function delProduct() {
    products.pop();
    console.log('список товаров после нажатия на кнопку');
    for (let i = 0; i < products.length; i++) {
        console.log(products[i]);
    }
}

/*Создайте массив с элементами 1, 2, 3. Выведите на экран
каждый из этих элементов.
2. Создайте массив с произвольными элементами.
Выведите на экран количество элементов в этом
массиве.
3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо
первого элемента число 1, вместо второго - 2, вместо
третьего - 3.*/
const array = [1, 2, 3];
console.log(...array);

array.forEach((el, i) => {
    console.log(`первый аргумент - значение ${el} второй аргумент - индекс ${i}`);
})

const arrEl = ['a', 'b', 'c'];

arrEl[0] = 1;
arrEl[1] = 2;
arrEl[2] = 3;
console.log(arrEl);

/*Создайте массив с элементами 1, 2 и 3. С помощью оператора ++
увеличьте каждый элемент массива на единицу.
2. Узнайте длину следующего массива:
const arr = [];
arr[3] = 'a';
arr[8] = 'b';
1. Пусть дан такой массив:
const arr = [1, 2, 3];
Добавьте ему в конец элементы 4 и 5.
1. Создайте произвольный массив из 5 элементов, Удалите из него два
элемента. Проверьте, какое станет значение свойства length после
этого.*/
const myArr = [1, 2, 3];

for (let i = 0; i < myArr.length; i++) {
    myArr[i]++;
}
console.log(myArr);

const arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr);

const arr1 = [1, 2, 4, 8, 16];
arr1.splice(3, 5);
console.log(arr1);

/*С помощью цикла for выведите в консоль числа от 11 до 33.
2. С помощью цикла for выведите в консоль нечетные числа в
промежутке от 1 до 99.
3. С помощью цикла for выведите в консоль числа от 100 до 0.
4. Дано число num с неким начальным значением. Умножайте его на 3
столько раз, пока результат умножения не станет больше 1000.
Какое число получится? Посчитайте количество итераций,
необходимых для этого.*/
/*const arrNumber = [];

for (let i = 11; i <= 33; i++) {
    arrNumber.push(i);
}
console.log(arrNumber);

const arrNotEventNum = [];
/*
for (let i = 1; i <= 99; i-=2) {
    arrNotEventNum.push(i);
}
console.log(arrNotEventNum);

const arrNumber1 = [];
for (let i = 0; i <= 100; i++) {
    arrNumber1.unshift(i);
}
console.log(arrNumber1);
*/

let number = 1;
let count = 0;

while (number <= 1000) {
    number *= 3;
    count++
}
console.log(`резльтат ${number}`);
console.log(`количество итераций ${count}`);

/*Дан массив const arr = [2, 5, 9, 15, 1, 4];
Выведите в консоль те элементы массива, которые больше 3-х, но
меньше 10.
1. Найдите сумму четных чисел от 2 до 100.
2. Дан массив const = [2, 5, 9, 3, 1, 4];
Найдите сумму элементов этого массива.
1. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
2. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл,
который будет по очереди выводить элементы этого массива в
консоль до тех пор, пока не встретится элемент со значением 0.
После этого цикл должен завершить свою работу.*/
const arr2 = [2, 5, 9, 15, 1, 4];
/*
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > 3 && arr2[i] < 10) {
        console.log(arr2[i]);
    }
}
*/
const res = arr2.filter((el) => el > 3 && el < 10);
console.log(res);

let sum3 = 0;
for (let i = 2; i <= 100; i++) {   
    if (i % 2 === 1) {
        sum3 += i;
    }
}
console.log(sum3);

const arrConst = [2, 5, 9, 3, 1, 4];
let sumArrConst = 0;

for (let i = 0; i < arrConst.length; i++) {
    sumArrConst += arrConst[i];
}
console.log(sumArrConst);

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('-' + arr3.join('-') + '-');

const arr4 = [2, 5, 9, 0, 3, 1, 4];

for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] === 0) {
        break;
    }
    console.log(arr4[i]);
}

