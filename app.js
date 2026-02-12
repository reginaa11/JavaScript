
// 1. ФУНКЦИИ

// 1.1. Функция разности двух чисел (два способа)


// Способ 1: функция выводит сообщение с результатом
console.log(1.1);
function subtractAndShow(a, b) {
    const result = a - b;
    console.log(`(1): Разность ${a} - ${b} = ${result}`);
}
subtractAndShow(10, 3);

// Способ 2: функция возвращает результат, вывод в основной программе
function subtract(a, b) {
    return a - b;
}
const diff = subtract(10, 3);
console.log(`(2): Разность 10 - 3 = ${diff}`);
console.log();

// 1.2. Функция приветствия по возрасту
console.log(1.2);
function greetByAge(age) {
    if (age < 18) {
        console.log('Привет, малыш!');
    } else {
        console.log('Здравствуйте, юноша!');
    }
}
greetByAge(15);
greetByAge(20);

// 1.3. Функция, возвращающая наибольшее из трёх чисел
console.log(1.3)
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log(`Наибольшее из (5, 12, 7): ${maxOfThree(5, 12, 7)}`);


// 1.4. Что выведет код? Объяснение
console.log(1.4);
let variable = "Глобальная переменная";
function f() {
    let variable = "Локальная переменная";
    console.log(variable); // "Локальная переменная" — внутри функции
}
f();
console.log(variable); // "Глобальная переменная" — вне функции
console.log('Объяснение: внутри функции создаётся локальная переменная, которая перекрывает глобальную. Вне функции глобальная переменная остаётся неизменной.');


// 1.5. Функция u = (max(x,y) + max(x+y,z)) / (max(0.5, x+z))^2
console.log(1.5);
function calculateU(x, y, z) {
    const numerator = Math.max(x, y) + Math.max(x + y, z);
    const denominator = Math.pow(Math.max(0.5, x + z), 2);
    return numerator / denominator;
}
console.log(`u(2, 3, 4) = ${calculateU(2, 3, 4)}`);


// 1.6. Периметр n-угольника по координатам вершин
console.log(1.6)
function polygonPerimeter(...coords) {
    let perimeter = 0;
    const n = coords.length / 2;
    for (let i = 0; i < n; i++) {
        const x1 = coords[i * 2];
        const y1 = coords[i * 2 + 1];
        const x2 = coords[(i * 2 + 2) % (n * 2)];
        const y2 = coords[(i * 2 + 3) % (n * 2)];
        perimeter += Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }
    return perimeter;
}
console.log(`Периметр треугольника (0,0), (3,0), (0,4): ${polygonPerimeter(0, 0, 3, 0, 0, 4)}`);


// 1.7. Рекурсивная функция: sin суммы предыдущих
console.log(1.7)
function sequenceN(n, prevSum = 0) {
    if (n === 1) return 1;
    const prev = sequenceN(n - 1, prevSum);
    const sum = prevSum + prev;
    return Math.sin(sum);
}
console.log(`5-й член последовательности: ${sequenceN(5)}`);


// 2. МАССИВЫ



// 2.1. Создание, изменение, удаление элемента массива
console.log(2.1);
let arr = [];
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
console.log(`Элемент с индексом 2: ${arr[2]}`);
console.log(`Количество элементов: ${arr.length}`);
arr.splice(1, 1); // удаляем второй по счёту (индекс 1)
arr.forEach(item => console.log(`2.1: ${item}`));


// 2.2. Массивы стран и населения, вывод через for и for...in
console.log(2.2)
let countries = ["Россия", "США", "Китай"];
let population = [146, 331, 1441];

function printCountriesAndPopulation() {
    for (let i = 0; i < countries.length; i++) {
        console.log(`(for): ${countries[i]} — население ${population[i]} млн`);
    }
    for (let i in countries) {
        console.log(`(for...in): ${countries[i]} — население ${population[i]} млн`);
    }
}
printCountriesAndPopulation();

// 2.3. Метод pop() и join()
console.log(2.3)
let arr2 = ["January", "February", "March", "April", "May", "June"];
let len = arr2.pop();
console.log(`Результирующий массив: ${arr2.join(" ")}`);
console.log(`Удалённый элемент: ${len}`);


// 2.4. slice() — первые 3 значения
console.log(2.4)
let a = [1, 2, 3, 4, 5, 6, 7];
let t = a.slice(0, 3);
console.log(`${t}`);

// 2.5. splice() — удалить 2, 3, 4
console.log(2.5)
let a5 = [1, 2, 3, 4, 5, 6, 7];
let d = a5.splice(1, 3);
console.log(`Изменённый массив: ${a5}`);

// 2.6. reverse()
console.log(2.6)
let arr6 = [1, 2, 3, 4, 5];
let reversed = arr6.reverse();
console.log(`${reversed}`);

// 2.7. Сортировка массива (числа, затем строки)

console.log(2.7)

let arr7 = ['c', 5, 2, 'b', 3, 1, 4, 'a'];
let sorted = arr7.sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') return a - b;
    if (typeof a === 'number') return -1;
    if (typeof b === 'number') return 1;
    return a.localeCompare(b);
});
console.log(`${sorted}`);


// 2.8. join('+')

console.log(2.8)

let arr8 = [1, 2, 3, 4, 5];
console.log(`${arr8.join('+')}`);


// 2.9. Медиана двух массивов

console.log(2.9)

let arr9a = [1, 2, 5, 4, 6];
let arr9b = [8, 2, 5, 9, 5];
let merged = arr9a.concat(arr9b).sort((a, b) => a - b);
let median;
const mid = Math.floor(merged.length / 2);
if (merged.length % 2 === 0) {
    median = (merged[mid - 1] + merged[mid]) / 2;
} else {
    median = merged[mid];
}
console.log(`Медиана: ${median}`);

// 2.10. Случайный массив: min и max поменять местами

console.log(2.10)

let randomArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log(`Исходный: ${randomArr}`);
let minIndex = randomArr.indexOf(Math.min(...randomArr));
let maxIndex = randomArr.indexOf(Math.max(...randomArr));
[randomArr[minIndex], randomArr[maxIndex]] = [randomArr[maxIndex], randomArr[minIndex]];
console.log(`После замены: ${randomArr}`);


// 2.11. Проверка на упорядоченность по убыванию

console.log(2.11)

function checkDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            console.log(`Порядок нарушен на индексе ${i + 1}`);
            return;
        }
    }
    console.log(` Массив упорядочен по убыванию. В обратном порядке: ${arr.slice().reverse()}`);
}
checkDescending([5, 4, 3, 2, 1]);
checkDescending([5, 3, 4, 2, 1]);

// 2.12. Преобразования элементов массива

console.log(2.12)

let arr12 = [1, -2, 3, -4, 5, -6, 7];
for (let i = 0; i < arr12.length; i++) {
    if (arr12[i] > 0 && i % 2 !== 0) {
        arr12[i] *= 3;
    }
    if (arr12[i] < 0 && i % 2 === 0) {
        arr12[i] /= 5;
    }
}
console.log(`${arr12}`);


// 2.13. Матрица 5x5: элементы в интервале [-5; 7]
console.log('2.13: Матрица:');

let matrix = Array.from({ length: 5 }, () =>
    Array.from({ length: 5 }, () => Math.floor(Math.random() * 20 - 5))
);

matrix.forEach(row => console.log(row));
console.log('Элементы в [-5;7]:');
matrix.forEach(row => {
    row.forEach(val => {
        if (val >= -5 && val <= 7) console.log(val);
    });
});


// 2.14. Сумма максимумов строк, произведение минимумов столбцов

console.log(2.14)

let M = 3, N = 4;
let matrix14 = Array.from({ length: M }, () =>
    Array.from({ length: N }, () => Math.floor(Math.random() * 10))
);
console.log('Матрица:');
matrix14.forEach(row => console.log(row));

let sumOfMaxInRows = 0;
for (let i = 0; i < M; i++) {
    sumOfMaxInRows += Math.max(...matrix14[i]);
}
console.log(` Сумма максимумов строк: ${sumOfMaxInRows}`);

let productOfMinInCols = 1;
for (let j = 0; j < N; j++) {
    let min = matrix14[0][j];
    for (let i = 1; i < M; i++) {
        if (matrix14[i][j] < min) min = matrix14[i][j];
    }
    productOfMinInCols *= min;
}
console.log(`Произведение минимумов столбцов: ${productOfMinInCols}`);

// 2.15. Ассоциативный массив: авторы и книги

console.log(2.15);

let booksByAuthor = {
    "Пушкин": ["Евгений Онегин", "Капитанская дочка"],
    "Есенин": ["Анна Снегина", "Чёрный человек"],
    "Данцова": ["Иронический детектив 1", "Иронический детектив 2"]
};

console.log('Авторы и их книги:');
for (let author in booksByAuthor) {
    console.log(`${author}: ${booksByAuthor[author].join(', ')}`);
}
