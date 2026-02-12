//  1 задание
console.log("1 задание");
let name = "Анна";
let age = 25;
let isStudent = true;
let score = 95.5;
let course = null;

console.log(typeof name);      
console.log(typeof age);       
console.log(typeof isStudent); 
console.log(typeof score);     
console.log(typeof course);   

// 2 задание 
console.log("\n2 задание");
let num1 = 10;
let num2 = 5;

console.log("Равна второй? " + (num1 === num2));   
console.log("Меньше второй? " + (num1 < num2));    
console.log("Меньше или равна второй? " + (num1 <= num2)); 
console.log("Больше второй? " + (num1 > num2));    

// 3 задание 
console.log("\n3 задание");
let a = false;
let b = null;
let c = undefined;

console.log(a); 
console.log(b); 
console.log(c); 

// 4 задание 
console.log("\n4 задание");

console.log('"1" + 2 + 3 =', "1" + 2 + 3);
console.log('Объяснение: Сначала "1" + 2 = "12" (строковая конкатенация), затем "12" + 3 = "123"\n');

console.log('1 + 2 + "3" =', 1 + 2 + "3");
console.log('Объяснение: Сначала 1 + 2 = 3 (числа), затем 3 + "3" = "33" (строковая конкатенация)\n');

console.log('"1" - 2 =', "1" - 2);
console.log('Объяснение: Оператор "-" преобразует строку "1" в число 1, затем 1 - 2 = -1\n');

console.log('"1" + - 2 =', "1" + - 2);
console.log('Объяснение: Сначала -2 вычисляется как число -2, затем "1" + (-2) = "1-2"\n');

console.log('"1" + "1" - "1" =', "1" + "1" - "1");
console.log('Объяснение: Сначала "1" + "1" = "11" (конкатенация), затем "11" - "1" = 10 (преобразование в числа)\n');

console.log('"foo" + - "bar" =', "foo" + - "bar");
console.log('Объяснение: -"bar" = NaN (не число), затем "foo" + NaN = "fooNaN"\n');

console.log('0 == "0" =', 0 == "0");
console.log('Объяснение: Строка "0" преобразуется в число 0, поэтому 0 == 0 = true\n');

console.log('0.5 + 0.1 == 0.6 =', 0.5 + 0.1 == 0.6);
console.log('Объяснение: 0.5 + 0.1 = 0.6 точно, поэтому true\n');

console.log('0.1 + 0.2 == 0.3 =', 0.1 + 0.2 == 0.3);
console.log('Объяснение: 0.1 + 0.2 = 0.30000000000000004 (неточность чисел с плавающей точкой), поэтому false\n');

console.log('true + true + true == 3 =', true + true + true == 3);
console.log('Объяснение: true = 1, поэтому 1 + 1 + 1 = 3, и 3 == 3 = true\n');

console.log('true == 1 =', true == 1);
console.log('Объяснение: true преобразуется в 1, поэтому 1 == 1 = true\n');

console.log('true === 1 =', true === 1);
console.log('Объяснение: Типы разные (boolean vs number), поэтому false\n');

console.log('1 < 2 < 3 =', 1 < 2 < 3);
console.log('Объяснение: Сначала 1 < 2 = true, затем true < 3 = 1 < 3 = true\n');

console.log('3 > 2 > 1 =', 3 > 2 > 1);
console.log('Объяснение: Сначала 3 > 2 = true, затем true > 1 = 1 > 1 = false\n');

console.log('9007199254740991 + 1 == 9007199254740991 + 2 =', 
            9007199254740991 + 1 == 9007199254740991 + 2);
console.log('Объяснение: Число превышает Number.MAX_SAFE_INTEGER (2^53-1), теряется точность\n');

console.log('Math.sqrt(-1) == Math.sqrt(-1) =', Math.sqrt(-1) == Math.sqrt(-1));
console.log('Объяснение: Math.sqrt(-1) = NaN, а NaN не равен даже самому себе в JavaScript\n');

// 5 задание 
console.log("\n5 задание");
let str1 = 'Кто ';
let str2 = 'ты ';
let str3 = 'такой?';

let concatenation = str1 + str2 + str3;

console.log(concatenation);

// 6 задание 
console.log("\n6 задание");

let str = "20";
let f = 5;

console.log("str = \"20\", f = 5\n");

console.log('str + f =', str + f);
console.log('Объяснение: Оператор "+" выполняет конкатенацию, строка "20" + число 5 = "205"\n');

console.log('str - f =', str - f);
console.log('Объяснение: Оператор "-" преобразует строку в число, 20 - 5 = 15\n');

console.log('str * "2" =', str * "2");
console.log('Объяснение: Оператор "*" преобразует обе строки в числа, 20 * 2 = 40\n');

console.log('str / 2 =', str / 2);
console.log('Объяснение: Оператор "/" преобразует строку в число, 20 / 2 = 10');

// 7 задание 
console.log("\n7 задание");

let a1 = "12";
let b1 = "7.15";

let result = Math.round(Number(a1) % Number(b1));

console.log("a1 = \"12\", b1 = \"7.15\"");
console.log("Остаток от деления a1 на b1:");
console.log("Результат:", result); 

// 8 задание 
console.log("\n8 задание");

let x = 2;

let numerator = Math.pow(x, 2) - 7 * x + 10;

let denominator = Math.pow(x, 2) - 8 * x + 12;

let result1 = numerator / denominator;

console.log(`(${x}² - 7*${x} + 10) / (${x}² - 8*${x} + 12)`);
console.log(`x = ${x}`);
console.log(`Числитель: ${x}² - 7*${x} + 10 = ${numerator}`);
console.log(`Знаменатель: ${x}² - 8*${x} + 12 = ${denominator}`);
console.log(`Результат: ${result1}`);

// 9 задание 
console.log("\n9 задание");

let email = "user@example.com"; // Можно изменить этот email для тестирования

if (email.includes("@")) {
    console.log("Адрес содержит символ @");
} else {
    console.log("Внимание! Адрес НЕ содержит символ @");
}

