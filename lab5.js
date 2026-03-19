console.log("ЛАБОРАТОРНАЯ РАБОТА 5 - ПРОМИСЫ И ASYNC/AWAIT");

console.log("ЗАДАНИЕ 1");

let promise = new Promise(function(resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
});

promise.then(console.log );
// Выводится 1 Промис можно разрешить (resolve) только один раз.
//Первый resolve(1) срабатывает сразу, а второй resolve(2) игнорируется.




console.log("ЗАДАНИЕ 2 (Промисификация)");

// Исходные функции из 4-й лабораторной (их нельзя менять)
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

// Промисификация - оборачиваем функции в промисы
function readConfigPromise(name) {
    return new Promise(function(resolve) {
        readConfig(name, resolve);
    });
}

function doQueryPromise(statement) {
    return new Promise(function(resolve) {
        doQuery(statement, resolve);
    });
}

function httpGetPromise(url) {
    return new Promise(function(resolve) {
        httpGet(url, resolve);
    });
}

function readFilePromise(path) {
    return new Promise(function(resolve) {
        readFile(path, resolve);
    });
}

// Выполняем последовательно с помощью промисов
console.log("start");

readConfigPromise('myConfig')
    .then(function() {
        return doQueryPromise('select * from cities');
    })
    .then(function() {
        return httpGetPromise('http://google.com');
    })
    .then(function() {
        return readFilePromise('README.md');
    })
    .then(function() {
        console.log('It is done!');
        console.log('end');
        console.log('');

        runTask3();
    });





function runTask3() {
    console.log("ЗАДАНИЕ 3 (Промисы)");
    
    // Асинхронные функции f1-f6
    function f1(x) {
        return new Promise(function(resolve) {
            setTimeout(() => {
                let res = x * x;
                console.log('f1: ' + x + '^2 = ' + res);
                resolve(res);
            }, Math.random() * 500);
        });
    }
    
    function f2(x) {
        return new Promise(function(resolve) {
            setTimeout(() => {
                let res = 2 * x;
                console.log('f2: 2 * ' + x + ' = ' + res);
                resolve(res);
            }, Math.random() * 500);
        });
    }
    
    function f3(x) {
        return new Promise(function(resolve) {
            setTimeout(() => {
                let res = -2;
                console.log('f3: -2 = ' + res);
                resolve(res);
            }, Math.random() * 500);
        });
    }
    
    function f4(x) {
        return new Promise(function(resolve) {
            setTimeout(() => {
                let res = x + 5;
                console.log('f4: ' + x + ' + 5 = ' + res);
                resolve(res);
            }, Math.random() * 500);
        });
    }
    
    function f5(x) {
        return new Promise(function(resolve) {
            setTimeout(() => {
                let res = 3 * x;
                console.log('f5: 3 * ' + x + ' = ' + res);
                resolve(res);
            }, Math.random() * 500);
        });
    }
    
    function f6(x) {
        return new Promise(function(resolve) {
            setTimeout(() => {
                let res = x - 10;
                console.log('f6: ' + x + ' - 10 = ' + res);
                resolve(res);
            }, Math.random() * 500);
        });
    }
    
    // Функция для вычисления F(x) с n функциями
    function calculateF(x, n) {
        let result = 0;
        let promiseChain = Promise.resolve();
        let funcs = [f1, f2, f3, f4, f5, f6];
        
        console.log("\nВычисляем F(x) для x = " + x + ", n = " + n);
        
        for (let i = 0; i < n; i++) {
            promiseChain = promiseChain
                .then(function() {
                    return funcs[i](x);
                })
                .then(function(value) {
                    result += value;
                    console.log('Промежуточный результат после f' + (i+1) + ': ' + result);
                });
        }
        
        return promiseChain.then(function() {
            console.log('ИТОГ: F(' + x + ') = ' + result);
            return result;
        });
    }
    
    // Запускаем тесты последовательно
    calculateF(3, 2)
        .then(function() {
            return calculateF(3, 4);
        })
        .then(function() {
            return calculateF(3, 6);
        })
        .then(function() {
            console.log('');
            
            runTask4();
        });
}





function runTask4() {
    console.log("ЗАДАНИЕ 4 (Промис с накоплением)");
    
    function createAdder(secondNumber) {
        // Проверяем второй аргумент при создании
        if (secondNumber === undefined || typeof secondNumber !== 'number') {
            return Promise.reject('Ошибка: второй аргумент не число или не определен');
        }
        
        return new Promise(function(resolve, reject) {
            let count = 0;
            let currentSum = 0;
            
            function nextStep(firstNumber) {
                // Проверяем первый аргумент при каждом вызове
                if (firstNumber === undefined || typeof firstNumber !== 'number') {
                    reject('Ошибка: первый аргумент не число или не определен');
                    return;
                }
                
                count++;
                currentSum = firstNumber + secondNumber;
                
                console.log('Шаг ' + count + ': ' + firstNumber + ' + ' + secondNumber + ' = ' + currentSum);
                
                if (count >= 5) {
                    console.log('Достигнуто 5 шагов, завершаем');
                    resolve(currentSum);
                } else {
                    // Запускаем следующий шаг через 2 секунды
                    setTimeout(function() {
                        nextStep(currentSum);
                    }, 2000);
                }
            }
            
            
            nextStep(10);
        });
    }
    
    // Успешный вариант
    console.log("Успешный вызов");
    let adder = createAdder(5);
    adder
        .then(function(finalResult) {
            console.log('Финальный результат: ' + finalResult);
        })
        .catch(function(error) {
            console.log('Ошибка: ' + error);
        });
    
    // Отложим вызов с ошибкой, чтобы не мешал первому
    setTimeout(function() {
        console.log("\nВызов с ошибкой (второй аргумент не число)");
        let badAdder = createAdder("не число");
        badAdder
            .then(function(finalResult) {
                console.log('Финальный результат: ' + finalResult);
            })
            .catch(function(error) {
                console.log('Ошибка: ' + error);
            });
    }, 11000);
    
    setTimeout(function() {
        console.log('');
        5
        runTask5();
    }, 12000);
}







async function runTask5() {
    console.log("ЗАДАНИЕ 5 (async/await)");
    
    // Асинхронные функции с промисами
    function readConfigAsync(name) {
        return new Promise(function(resolve) {
            setTimeout(() => {
                console.log('(1) config from ' + name + ' loaded');
                resolve();
            }, Math.floor(Math.random() * 1000));
        });
    }
    
    function doQueryAsync(statement) {
        return new Promise(function(resolve) {
            setTimeout(() => {
                console.log('(2) SQL query executed: ' + statement);
                resolve();
            }, Math.floor(Math.random() * 1000));
        });
    }
    
    function httpGetAsync(url) {
        return new Promise(function(resolve) {
            setTimeout(() => {
                console.log('(3) Page retrieved: ' + url);
                resolve();
            }, Math.floor(Math.random() * 1000));
        });
    }
    
    function readFileAsync(path) {
        return new Promise(function(resolve) {
            setTimeout(() => {
                console.log('(4) Readme file from ' + path + ' loaded');
                resolve();
            }, Math.floor(Math.random() * 1000));
        });
    }
    
    // Задание 2 через async/await
    console.log("Задание 2 через async/await");
    console.log('start');
    
    await readConfigAsync('myConfig');
    await doQueryAsync('select * from cities');
    await httpGetAsync('http://google.com');
    await readFileAsync('README.md');
    
    console.log('It is done!');
    console.log('end');
    
    // Задание 3 через async/await
    console.log("\nЗадание 3 через async/await");
    
    async function f1Async(x) {
        await new Promise(r => setTimeout(r, Math.random() * 500));
        return x * x;
    }
    
    async function f2Async(x) {
        await new Promise(r => setTimeout(r, Math.random() * 500));
        return 2 * x;
    }
    
    async function f3Async(x) {
        await new Promise(r => setTimeout(r, Math.random() * 500));
        return -2;
    }
    
    async function f4Async(x) {
        await new Promise(r => setTimeout(r, Math.random() * 500));
        return x + 5;
    }
    
    async function f5Async(x) {
        await new Promise(r => setTimeout(r, Math.random() * 500));
        return 3 * x;
    }
    
    async function f6Async(x) {
        await new Promise(r => setTimeout(r, Math.random() * 500));
        return x - 10;
    }
    
    async function calculateFAsync(x, n) {
        let result = 0;
        let funcs = [f1Async, f2Async, f3Async, f4Async, f5Async, f6Async];
        
        console.log("\nВычисляем F(x) для x = " + x + ", n = " + n);
        
        for (let i = 0; i < n; i++) {
            let val = await funcs[i](x);
            console.log('f' + (i+1) + ' = ' + val);
            result += val;
            console.log('Промежуточный результат: ' + result);
        }
        
        console.log('ИТОГ: F(' + x + ') = ' + result);
    }
    
    await calculateFAsync(3, 2);
    await calculateFAsync(3, 4);
    await calculateFAsync(3, 6);
    
    // Задание 4 через async/await
    console.log("\nЗадание 4 через async/await");
    
    async function asyncAdder(secondNumber) {
        if (secondNumber === undefined || typeof secondNumber !== 'number') {
            throw 'Ошибка: второй аргумент не число или не определен';
        }
        
        let count = 0;
        let currentSum = 0;
        let firstNumber = 10;
        
        while (count < 5) {
            if (firstNumber === undefined || typeof firstNumber !== 'number') {
                throw 'Ошибка: первый аргумент не число или не определен';
            }
            
            count++;
            currentSum = firstNumber + secondNumber;
            
            console.log('Шаг ' + count + ': ' + firstNumber + ' + ' + secondNumber + ' = ' + currentSum);
            
            if (count < 5) {
                await new Promise(r => setTimeout(r, 2000));
                firstNumber = currentSum;
            }
        }
        
        console.log('Достигнуто 5 шагов, завершаем');
        return currentSum;
    }
    
    try {
        console.log(" Успешный вызов");
        let result = await asyncAdder(5);
        console.log('Финальный результат: ' + result);
    } catch (error) {
        console.log('Ошибка: ' + error);
    }
    
    try {
        console.log("\nВызов с ошибкой");
        let result = await asyncAdder("не число");
        console.log('Финальный результат: ' + result);
    } catch (error) {
        console.log('Ошибка: ' + error);
    }
    
    console.log('');
    
    runTask6();
}




function runTask6() {
    console.log("ЗАДАНИЕ 6");
    
    async function wait() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return 10;
    }
    
    function f() {
        // Вызываем async функцию и работаем с результатом через then
        wait().then(function(result) {
            console.log('Результат из async функции: ' + result);
        });
    
    }
    
    f();
    // async функция возвращает промис, поэтому в обычной функции, можно использовать .then() для получения результата.
    
    setTimeout(function() {
        runTask7();
    }, 1500);
}







async function runTask7() {
    console.log("ЗАДАНИЕ 7 (Собеседование)");
    
    // Функция для задержки на указанное время
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    // Основная функция проведения собеседования
    async function interviews(candidates) {
        // Создаем массив промисов для всех кандидатов
        let promises = [];
        
        for (let i = 0; i < candidates.length; i++) {
            promises.push(processCandidate(candidates[i]));
        }
        
        // Ждем завершения всех кандидатов
        await Promise.all(promises);
    }
    
    // Функция обработки одного кандидата
    async function processCandidate(candidate) {
        let name = candidate[0];
        let time1 = candidate[1];
        let defense1 = candidate[2];
        let time2 = candidate[3];
        let defense2 = candidate[4];
        
        // Первое задание
        console.log(name + ' started the 1 task.');
        await sleep(time1 * 100); // умножаем на 100 для наглядности
        
        console.log(name + ' moved on to the defense of the 1 task.');
        await sleep(defense1 * 100);
        
        console.log(name + ' completed the 1 task.');
        
        // Отдых перед вторым заданием
        console.log(name + ' is resting.');
        await sleep(500); // 5 единиц времени
        
        // Второе задание
        console.log(name + ' started the 2 task.');
        await sleep(time2 * 100);
        
        console.log(name + ' moved on to the defense of the 2 task.');
        await sleep(defense2 * 100);
        
        console.log(name + ' completed the 2 task.');
    }
    
    // Тестовые данные
    let candidates = [
        ['Ivan', 5, 2, 7, 2],
        ['John', 3, 4, 5, 1],
        ['Sophia', 4, 2, 5, 1]
    ];
    
    console.log("Начинаем собеседование...\n");
    await interviews(candidates);
    console.log("\nСобеседование завершено!");
}
