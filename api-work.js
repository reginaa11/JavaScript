// ============================================
// ЧАСТЬ 2: Работа с API через XHR, Promise, async/await
// ============================================

// Список API для запросов (5 разных)
const apiUrls = [
    'https://dog.ceo/api/breeds/image/random',
    'https://catfact.ninja/fact',
    'https://api.chucknorris.io/jokes/random',
    'https://randomuser.me/api/',
    'https://official-joke-api.appspot.com/random_joke'
];

// ========== 1. Функция request() с коллбэком ==========
function request(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
        if (xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
        } else {
            callback(new Error('Ошибка: ' + xhr.status), null);
        }
    };
    xhr.onerror = function() {
        callback(new Error('Сетевая ошибка'), null);
    };
    xhr.send();
}

// Запросы через коллбэки (последовательно)
console.log('=== ЗАПРОСЫ ЧЕРЕЗ КОЛЛБЭКИ ===');

function runCallbacks(index) {
    if (index >= apiUrls.length) {
        console.log('Все запросы через коллбэки выполнены');
        return;
    }
    
    request(apiUrls[index], (error, data) => {
        if (error) {
            console.error('Ошибка запроса', index + 1, error);
        } else {
            console.log('Результат запроса', index + 1, data);
        }
        runCallbacks(index + 1);
    });
}

runCallbacks(0);

// ========== 2. Функция requestPromise() ==========
function requestPromise(url) {
    return new Promise((resolve, reject) => {
        request(url, (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

// Запросы через промисы (then)
console.log('\n=== ЗАПРОСЫ ЧЕРЕЗ ПРОМИСЫ ===');

let promiseChain = Promise.resolve();

apiUrls.forEach((url, index) => {
    promiseChain = promiseChain.then(() => {
        return requestPromise(url);
    }).then(data => {
        console.log('Промис запрос', index + 1, data);
    }).catch(error => {
        console.error('Ошибка промис запроса', index + 1, error);
    });
});

promiseChain.then(() => {
    console.log('Все промис-запросы выполнены');
});

// ========== 3. Запросы через async/await ==========
console.log('\n=== ЗАПРОСЫ ЧЕРЕЗ ASYNC/AWAIT ===');

async function runAsyncRequests() {
    for (let i = 0; i < apiUrls.length; i++) {
        try {
            const data = await requestPromise(apiUrls[i]);
            console.log('Async/await запрос', i + 1, data);
        } catch (error) {
            console.error('Ошибка async/await запроса', i + 1, error);
        }
    }
    console.log('Все async/await запросы выполнены');
}

// Запускаем через 3 секунды, чтобы не мешать предыдущим выводам
setTimeout(() => {
    runAsyncRequests();
}, 3000);