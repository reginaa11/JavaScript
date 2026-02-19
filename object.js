console.log("    Объекты   "); 
console.log("ЗАДАНИЕ 1");
let user = {};

user.name = "John";
console.log("После добавления name:", user);

user.surname = "Smith";
console.log("После добавления surname:", user);

user.name = "Pete";
console.log("После изменения name на Pete:", user);

delete user.name;
console.log("После удаления name:", user);
console.log(""); 


console.log("ЗАДАНИЕ 2");
let myBrowser = {
    name: "Microsoft Internet Explorer",
    version: "9.0"
};

console.log("Свойства объекта myBrowser:");
for (let key in myBrowser) {
    console.log(key + ": " + myBrowser[key]);
}
console.log(""); 


console.log("ЗАДАНИЕ 3");
function isEmpty(obj) {
    for (let key in obj) {
        // Если цикл запустился, значит есть свойство
        return false;
    }
    return true; // Свойств нет
}

let empty = {}
let notEmpty = { name: "John" };

console.log("empty пустой?", isEmpty(empty)); 
console.log("notEmpty пустой?", isEmpty(notEmpty)); 
console.log("");


console.log("ЗАДАНИЕ 4");
const user2 = {
    name: "John"
};

console.log("Исходный объект:", user2);


user2.name = "Pete";
console.log("После изменения name:", user2);
// Будет ошибка
// user2 = 123; // Объяснение: const защищает только саму переменную 
// от присваивания нового значения, но не защищает содержимое объекта. 
// Мы можем менять свойства объекта, но не можем присвоить переменной новое значение.
console.log(""); 


console.log("ЗАДАНИЕ 5");
function multiplyNumeric(obj) {
    for (let key in obj) {
        
        if (typeof obj[key] === 'number') {
            obj[key] = obj[key] * 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log("До умножения:", menu);
multiplyNumeric(menu);
console.log("После умножения:", menu);

console.log("");


console.log("ЗАДАНИЕ 6");

let calculator = {
    // Метод для сохранения двух чисел
    read: function(a, b) {
        this.num1 = a;
        this.num2 = b;
    },
    // Метод для суммы
    sum: function() {
        return this.num1 + this.num2;
    },
    // Метод для произведения
    mul: function() {
        return this.num1 * this.num2;
    }
};
calculator.read(5, 3);
console.log("Сумма 5 и 3 =", calculator.sum()); // 8
console.log("Произведение 5 и 3 =", calculator.mul()); // 15
console.log(""); 



console.log("ЗАДАНИЕ 7");

let ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this; 
    },
    down: function() {
        this.step--;
        return this; 
    },
    showStep: function() {
        console.log("Текущая ступенька:", this.step);
        return this; 
    }
};
ladder.up()
      .up()
      .down()
      .showStep() 
      .down()
      .showStep(); 
console.log(""); 

console.log("ЗАДАНИЕ 8");

// Функция-конструктор
function Browser(name, version) {
    this.name = name;
    this.version = version;
    this.aboutBrowser = function() {
        console.log("Браузер: " + this.name + ", версия: " + this.version);
    };
}

let myBrowser2 = new Browser("Microsoft Internet Explorer", "9.0");

console.log("Свойства объекта myBrowser2:");
console.log("name:", myBrowser2.name);
console.log("version:", myBrowser2.version);

myBrowser2.aboutBrowser();
console.log("");


console.log("ЗАДАНИЕ 9");

// Функция-конструктор для сотрудника
function Employee(name, department, phone, salary) {
    this.name = name;
    this.department = department;
    this.phone = phone;
    this.salary = salary;
    
    // Метод для отображения данных
    this.showInfo = function() {
        console.log("Информация о сотруднике:");
        console.log("Имя:", this.name);
        console.log("Отдел:", this.department);
        console.log("Телефон:", this.phone);
        console.log("Зарплата:", this.salary);
        
    };
}
let employee1 = new Employee("Иван Петров", "IT-отдел", "+7-999-123-45-67", 75000);

employee1.showInfo();
console.log("");



console.log("ЗАДАНИЕ 10");

function Calculator() {
    this.read = function(a, b) {
        this.num1 = a;
        this.num2 = b;
    };
    this.sum = function() {
        return this.num1 + this.num2;
    };
    
    this.mul = function() {
        return this.num1 * this.num2;
    };
}


let myCalc = new Calculator();

myCalc.read(10, 4);
console.log("Калькулятор: 10 и 4");
console.log("Сумма:", myCalc.sum()); // 14
console.log("Произведение:", myCalc.mul()); // 40

console.log("");



console.log("ЗАДАНИЕ 11");

function Accumulator(startingValue) {
    // Текущее значение с начальным значением
    this.value = startingValue;
    // Метод для добавления числа
    this.read = function(a) {
        this.value = this.value + a;
    };
}

let accumulator = new Accumulator(1); 
console.log("Начальное значение:", accumulator.value); 

accumulator.read(10); 
console.log("После +10:", accumulator.value); 

accumulator.read(5);
console.log("После +5:", accumulator.value); 
console.log("");
