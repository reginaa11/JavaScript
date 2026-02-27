console.log("=== ЗАДАНИЕ 1 ===");

function countVowels(str) {
    let vowels = "aeiouy";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

function getConsonants(str) {
    let vowels = "aeiouy";
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

function ask_password(login, password, success, failure) {
    
    login = login.toLowerCase();
    password = password.toLowerCase();
    
    let loginConsonants = getConsonants(login);
    let passwordConsonants = getConsonants(password);
    
    let vowelCount = countVowels(password);
    let wrongVowels = false;
    let wrongConsonants = false;

    if (vowelCount !== 3) {
        wrongVowels = true;
    }
    
    if (loginConsonants !== passwordConsonants) {
        wrongConsonants = true;
    }
    
   
    if (!wrongVowels && !wrongConsonants) {
        
        success(login);
    } else if (wrongVowels && wrongConsonants) {
        
        failure(login, "Everything is wrong");
    } else if (wrongVowels) {
        
        failure(login, "Wrong number of vowels");
    } else {
       
        failure(login, "Wrong consonants");
    }
}

// Функция main для вывода результата
function main(login, password) {
    ask_password(
        login, 
        password,

        function(login) {
            console.log("Привет, " + login + "!");
        },
        
        function(login, errorMessage) {
            console.log("Кто-то пытался притвориться пользователем " + login + 
                        ", но в пароле допустил ошибку: " + errorMessage.toUpperCase() + ".");
        }
    );
}

console.log("Тест 1: Правильный пароль");
main("login", "aaalgn"); 

console.log("\nТест 2: Только гласные неправильные");
main("login", "aelgn"); 

console.log("\nТест 3: Только согласные неправильные");
main("login", "aaaxxx");

console.log("\nТест 4: Обе ошибки");
main("login", "xxxxxx"); 




console.log("=== ЗАДАНИЕ 2 ===");

function readConfig(name, callback) {
    setTimeout(() => {
        console.log('(1) config from ' + name + ' loaded');
        callback();
    }, Math.floor(Math.random() * 1000));
}

function doQuery(statement, callback) {
    setTimeout(() => {
        console.log('(2) SQL query executed: ' + statement);
        callback();
    }, Math.floor(Math.random() * 1000));
}

function httpGet(url, callback) {
    setTimeout(() => {
        console.log('(3) Page retrieved: ' + url);
        callback();
    }, Math.floor(Math.random() * 1000));
}

function readFile(path, callback) {
    setTimeout(() => {
        console.log('(4) Readme file from ' + path + ' loaded');
        callback();
    }, Math.floor(Math.random() * 1000));
}

console.log("\n Часть a: Коллбэки");
console.log('start');

readConfig('myConfig', function() {
    doQuery('select * from cities', function() {
        httpGet('http://google.com', function() {
            readFile('README.md', function() {
                console.log('It is done!');
                console.log('end');
                
                // После завершения части a запускаем часть b
                runPartB();
            });
        });
    });
});

function runPartB() {
    console.log("\n Часть b: Функции-уведомители");
    console.log('start');
    
    function step1() {
        readConfig('myConfig', step2);
    }
    
    function step2() {
        doQuery('select * from cities', step3);
    }
    
    function step3() {
        httpGet('http://google.com', step4);
    }
    
    function step4() {
        readFile('README.md', function() {
            console.log('It is done!');
            console.log('end');
            
            runTask3();
        });
    }
    
    step1();
}




function runTask3() {
    console.log("\n=== ЗАДАНИЕ 3 ===");
    
    function f1(x, callback) {
        setTimeout(() => {
            let res = x * x; 
            console.log('f1: ' + x + '^2 = ' + res);
            callback(res);
        }, Math.random() * 500);
    }
    
    function f2(x, callback) {
        setTimeout(() => {
            let res = 2 * x;
            console.log('f2: 2 * ' + x + ' = ' + res);
            callback(res);
        }, Math.random() * 500);
    }
    
    function f3(x, callback) {
        setTimeout(() => {
            let res = -2; 
            console.log('f3: -2 = ' + res);
            callback(res);
        }, Math.random() * 500);
    }
    
    function f4(x, callback) {
        setTimeout(() => {
            let res = x + 5; 
            console.log('f4: ' + x + ' + 5 = ' + res);
            callback(res);
        }, Math.random() * 500);
    }
    
    function f5(x, callback) {
        setTimeout(() => {
            let res = 3 * x; 
            console.log('f5: 3 * ' + x + ' = ' + res);
            callback(res);
        }, Math.random() * 500);
    }
    
    function f6(x, callback) {
        setTimeout(() => {
            let res = x - 10; 
            console.log('f6: ' + x + ' - 10 = ' + res);
            callback(res);
        }, Math.random() * 500);
    }
    
    // Функция для вычисления F(x) с n функциями
    function calculateF(x, n, callback) {
        let result = 0;
        let currentStep = 1;
        
        function nextStep(value) {
            result += value;
            console.log('Промежуточный результат после f' + currentStep + ': ' + result);
            currentStep++;
            
            if (currentStep > n) {
                callback(result);
            } else {
            
                let func = getFunction(currentStep);
                func(x, nextStep);
            }
        }
        
       
        function getFunction(num) {
            switch(num) {
                case 1: return f1;
                case 2: return f2;
                case 3: return f3;
                case 4: return f4;
                case 5: return f5;
                case 6: return f6;
                default: return f1;
            }
        }
        
    
        console.log("\nВычисляем F(x) для x = " + x + ", n = " + n);
        let firstFunc = getFunction(1);
        firstFunc(x, nextStep);
    }
    
   
    console.log("\n n = 2 ");
    calculateF(3, 2, function(final) {
        console.log('ИТОГ: F(3) = ' + final);
        
        // Тест для n = 4
        console.log("\n n = 4");
        calculateF(3, 4, function(final) {
            console.log('ИТОГ: F(3) = ' + final);
            
            // Тест для n = 6
            console.log("\n n = 6 ");
            calculateF(3, 6, function(final) {
                console.log('ИТОГ: F(3) = ' + final);
                console.log("\n Все задания выполнены!");
            });
        });
    });
}
