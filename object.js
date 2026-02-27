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


console.log("    ---Работа с прототипами---  "); 
console.log("");
console.log("ЗАДАНИЕ 1");

let animal = {
    jumps: null
};

let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log("(1) rabbit.jumps =", rabbit.jumps); //rabbit имеет собственное свойство jumps = true

delete rabbit.jumps;
console.log("(2) После удаления rabbit.jumps =", rabbit.jumps); //После удаления свойства у rabbit, оно берется из прототипа animal (jumps = null)
delete animal.jumps;
console.log("(3) После удаления animal.jumps =", rabbit.jumps);//После удаления свойства у animal, его больше нет нигде → undefined

console.log(""); 

console.log("ЗАДАНИЕ 2");

let animal2 = {
    eat: function() {
        this.full = true;
        console.log("Метод eat вызван у:", this);
    }
};

let rabbit2 = {
    __proto__: animal2
};

rabbit2.eat();
console.log("rabbit2.full =", rabbit2.full);
console.log("animal2.full =", animal2.full); 

console.log("Свойство full получил rabbit2, \
    потому что this внутри метода eat() ссылается на объект,\
     который вызвал метод (rabbit2)");

console.log("");



console.log("ЗАДАНИЕ 3");

// Исходный код с проблемой
let hamster = {
    stomach: [], // ОДИН массив на всех!
    eat: function(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

speedy.eat("apple");

console.log("ПРОБЛЕМА:");
console.log("speedy.stomach =", speedy.stomach);
console.log("lazy.stomach =", lazy.stomach); 

console.log("\nПочему так произошло?");
console.log("У speedy и lazy нет своего stomach, \
    они используют один массив из прототипа hamster.");

// ИСПРАВЛЕНИЕ
let hamsterFixed = {
    stomach: [], // Это все еще прототип, 
    // но теперь мы будем создавать свои stomach
    eat: function(food) {
        if (!this.hasOwnProperty('stomach')) {
            this.stomach = [];
        }
        this.stomach.push(food);
    }
};

let speedyFixed = {
    __proto__: hamsterFixed
};

let lazyFixed = {
    __proto__: hamsterFixed
};

speedyFixed.eat("apple");
console.log("speedyFixed.stomach =", speedyFixed.stomach); 
console.log("lazyFixed.stomach =", lazyFixed.stomach); 
console.log(""); 

console.log("ЗАДАНИЕ 4");

// Исходный код из задания
String.prototype.color = "black";

function stringWrite() {
    console.log("Цвет текста: " + this.color);
    console.log("Текст: " + this.toString());
}

String.prototype.write = stringWrite;

console.log("Исходный код");
let s = new String("Это строка");
s.color = "red";
s.write();

let s2 = new String("Вторая строка");
s2.write();

// Добавляем свойство size по умолчанию
String.prototype.size = 12;

String.prototype.write = function() {
    console.log("Цвет текста: " + (this.color || String.prototype.color));
    console.log("Размер шрифта: " + (this.size || String.prototype.size));
    console.log("Текст: " + this.toString());
    console.log("---");
};

let s3 = new String("Строка с изменениями");
s3.color = "blue";
s3.size = 16;
s3.write();

let s4 = new String("Строка по умолчанию");
s4.write();

console.log("Мы добавили свойство size в прототип String,\
    и метод write выводит его.");
console.log("Если у конкретной строки нет своего size, \
    берется из прототипа.");

console.log(""); 



console.log("ЗАДАНИЕ 5");

function Rabbit() {}

Rabbit.prototype = {
    eats: true
};

let rabbit5 = new Rabbit();
console.log("Исходный rabbit.eats =", rabbit5.eats); 

Rabbit.prototype = {}; 
console.log("1.rabbit.eats =", rabbit5.eats); 
console.log("Объяснение: rabbit сохраняет ссылку на старый прототип");
// Это все еще прототип, но теперь мы будем создавать свои stomach
Rabbit.prototype = { eats: true };
let rabbit5b = new Rabbit();

console.log("");
Rabbit.prototype.eats = false; // Меняем свойство в прототипе
console.log("2.rabbit.eats =", rabbit5b.eats); // false (прототип изменился)

// Новый объект для теста
Rabbit.prototype = { eats: true };
let rabbit5c = new Rabbit();

console.log("");
delete rabbit5c.eats; // Удаляем собственное свойство (которого нет)
console.log("3.rabbit.eats =", rabbit5c.eats); // true (берется из прототипа)

// Новый объект для теста
Rabbit.prototype = { eats: true };
let rabbit5d = new Rabbit();

console.log("");
delete Rabbit.prototype.eats; // Удаляем свойство из прототипа
console.log("4.rabbit.eats =", rabbit5d.eats); // undefined (свойства больше нет)

console.log();
console.log("1. Rabbit.prototype = {} → true (старый прототип сохраняется)");
console.log("2. Rabbit.prototype.eats = false → false (прототип изменен)");
console.log("3. delete rabbit.eats → true (удаляем несуществующее свойство)");
console.log("4. delete Rabbit.prototype.eats → undefined (удаляем из прототипа)");

console.log(""); // Пустая строка

console.log("");

console.log(""); 
console.log("=== КЛАССЫ ===");
console.log(""); 



console.log("ЗАДАНИЕ 1");

class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    
    showTime() {
        console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
    }
}

let clock1 = new Clock(10, 30, 45);
clock1.showTime();

console.log(""); 




console.log("ЗАДАНИЕ 2");

class Animal {
    constructor(name) {
        this.name = name;
    }
}

// Исправленный класс
class MyRabbit extends Animal {
    constructor(name) {
        super(name);
        this.created = Date.now();
    }
}

let myrabbit = new Rabbit("Белый кролик");
console.log(rabbit.name);
console.log(rabbit.created);

console.log(""); 



console.log("ЗАДАНИЕ 3");

class Clock2 {
    constructor(template) {
        this.template = template;
    }
    
    render() {
        let date = new Date();
        let hours = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();
        
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        
        console.log(output);
    }
    
    stop() {
        clearInterval(this.timer);
    }
    
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock2 {
    constructor(template, precision) {
        super(template);
        this.precision = precision || 1000;
    }
    
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

let extendedClock = new ExtendedClock("h:m:s", 2000);
console.log("Класс ExtendedClock создан");

console.log(""); 




console.log("ЗАДАНИЕ 4");

class Stock {
    constructor() {
        this.boxes = [];
        this.nextId = 0;
    }
    
    add(w, v) {
        let box = {
            id: this.nextId,
            w: w,
            v: v,
            time: Date.now()
        };
        this.boxes.push(box);
        console.log("Добавлена коробка " + this.nextId + ": w=" + w + ", v=" + v);
        this.nextId++;
    }
    
    getByW(min_w) {
        let result = -1;
        let bestBox = null;
        
        for (let i = 0; i < this.boxes.length; i++) {
            let box = this.boxes[i];
            if (box.w >= min_w) {
                if (bestBox === null || box.w < bestBox.w) {
                    bestBox = box;
                } else if (box.w === bestBox.w && box.time < bestBox.time) {
                    bestBox = box;
                }
            }
        }
        
        if (bestBox !== null) {
            result = bestBox.id;
            let newBoxes = [];
            for (let i = 0; i < this.boxes.length; i++) {
                if (this.boxes[i].id !== bestBox.id) {
                    newBoxes.push(this.boxes[i]);
                }
            }
            this.boxes = newBoxes;
            console.log("Выдана коробка " + result);
        } else {
            console.log("Нет подходящей коробки");
        }
        
        return result;
    }
    
    getByV(min_v) {
        let result = -1;
        let bestBox = null;
        
        for (let i = 0; i < this.boxes.length; i++) {
            let box = this.boxes[i];
            if (box.v >= min_v) {
                if (bestBox === null || box.v < bestBox.v) {
                    bestBox = box;
                } else if (box.v === bestBox.v && box.time < bestBox.time) {
                    bestBox = box;
                }
            }
        }
        
        if (bestBox !== null) {
            result = bestBox.id;
            let newBoxes = [];
            for (let i = 0; i < this.boxes.length; i++) {
                if (this.boxes[i].id !== bestBox.id) {
                    newBoxes.push(this.boxes[i]);
                }
            }
            this.boxes = newBoxes;
            console.log("Выдана коробка " + result);
        } else {
            console.log("Нет подходящей коробки");
        }
        
        return result;
    }
}

let stock = new Stock();
stock.add(10, 20);
stock.add(15, 5);
stock.add(10, 30);

console.log("");
console.log("Тест getByW:");
stock.getByW(10);

console.log("");
console.log("Тест getByV:");
stock.getByV(15);