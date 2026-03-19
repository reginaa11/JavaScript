function task1a() {
    let x = prompt("Задание 1a: Введите число x для вычисления sin(x)");
    if (x !== null) {
        x = parseFloat(x);
        if (!isNaN(x)) {
            let result = Math.sin(x);
            alert("sin(" + x + ") = " + result);
        } else {
            alert("Ошибка: введите число!");
        }
    }
}

function task1b() {
    alert("Задание 1b: Введите координаты двух противоположных вершин квадрата");
    
    let x1 = parseFloat(prompt("Введите x1"));
    let y1 = parseFloat(prompt("Введите y1"));
    let x2 = parseFloat(prompt("Введите x2"));
    let y2 = parseFloat(prompt("Введите y2"));
    
    let x = parseFloat(prompt("Введите x точки"));
    let y = parseFloat(prompt("Введите y точки"));
    
    // Находим границы квадрата
    let left = Math.min(x1, x2);
    let right = Math.max(x1, x2);
    let bottom = Math.min(y1, y2);
    let top = Math.max(y1, y2);
    
    if (x >= left && x <= right && y >= bottom && y <= top) {
        alert("Точка (" + x + ", " + y + ") принадлежит квадрату");
    } else {
        alert("Точка (" + x + ", " + y + ") НЕ принадлежит квадрату");
    }
}


function task1c() {
    let n = parseInt(prompt("Задание 1c: Введите натуральное число"));
    
    if (isNaN(n) || n < 1) {
        alert("Ошибка: введите натуральное число (>=1)");
        return;
    }
    
    let found = false;
    let result = "";
    
    for (let a = 1; a * a <= n; a++) {
        for (let b = 1; b * b <= n; b++) {
            if (a * a + b * b === n) {
                found = true;
                result = n + " = " + a + "² + " + b + "²";
                break;
            }
        }
        if (found) break;
    }
    
    if (found) {
        alert("Можно: " + result);
    } else {
        alert(n + " нельзя представить в виде суммы двух квадратов");
    }
}

function task1d() {
    let email = prompt("Задание 1d: Введите адрес электронной почты");
    
    if (email !== null) {
        if (email.includes('@')) {
            alert("Email корректен: " + email);
        } else {
            alert("Предупреждение: email должен содержать символ @");
        }
    }
}


function task1e() {
    let s = prompt("Задание 1e: Введите строку");
    
    if (s !== null) {
        let latinCount = 0;
        
        for (let i = 0; i < s.length; i++) {
            let c = s[i];
            // Проверяем, является ли символ латинской буквой
            if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
                latinCount++;
            }
        }
        
        let percent = (latinCount / s.length * 100).toFixed(2);
        alert("Количество латинских букв: " + latinCount + "\n" +
              "Длина строки: " + s.length + "\n" +
              "Доля латинских букв: " + percent + "%");
    }
}


function task1f() {
    let s = prompt("Задание 1f: Введите строку из слов, разделенных пробелами");
    
    if (s !== null) {
        // Разбиваем строку на слова
        let words = s.split(' ');
        let uniqueWords = [];
        
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            // Пропускаем пустые слова (несколько пробелов подряд)
            if (word === '') continue;
            
            // Проверяем, есть ли уже такое слово
            let found = false;
            for (let j = 0; j < uniqueWords.length; j++) {
                if (uniqueWords[j] === word) {
                    found = true;
                    break;
                }
            }
            
            if (!found) {
                uniqueWords.push(word);
            }
        }
        
        let result = uniqueWords.join(' ');
        alert("Исходная строка: " + s + "\n" +
              "После удаления повторов: " + result);
    }
}


function task1g() {
    let n = parseInt(prompt("Задание 1g: Введите размер массива n"));
    
    if (isNaN(n) || n < 1) {
        alert("Ошибка: введите положительное число");
        return;
    }
    
    // Создаем массив случайных чисел
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    
    // Выводим исходный массив
    let result = "Исходный массив:\n";
    for (let i = 0; i < n; i++) {
        result += arr[i] + " ";
        if ((i + 1) % 5 === 0) result += "\n";
    }
    
    // Выводим в обратном порядке
    result += "\n\nМассив в обратном порядке:\n";
    for (let i = n - 1; i >= 0; i--) {
        result += arr[i] + " ";
        if ((n - i) % 5 === 0) result += "\n";
    }
    
    alert(result);
}


function task1h() {
    let n = parseInt(prompt("Задание 1h: Введите порядок матрицы n"));
    
    if (isNaN(n) || n < 2) {
        alert("Ошибка: введите число >= 2");
        return;
    }
    
    // Создаем матрицу
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = Math.floor(Math.random() * 20) - 10; // числа от -10 до 9
        }
    }
    
    // Выводим исходную матрицу
    let result = "Исходная матрица:\n";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result += matrix[i][j] + "\t";
        }
        result += "\n";
    }
    
    // Находим элементы на главной и побочной диагоналях
    let diagonalElements = [];
    for (let i = 0; i < n; i++) {
        diagonalElements.push(matrix[i][i]); // главная диагональ
        if (i !== n - 1 - i) { // избегаем дублирования центрального элемента
            diagonalElements.push(matrix[i][n - 1 - i]); // побочная диагональ
        }
    }
    
    // Находим максимальный и минимальный
    let max = Math.max(...diagonalElements);
    let min = Math.min(...diagonalElements);
    
    // Заменяем нулями все элементы диагоналей, кроме max и min
    for (let i = 0; i < n; i++) {
        if (matrix[i][i] !== max && matrix[i][i] !== min) {
            matrix[i][i] = 0;
        }
        if (i !== n - 1 - i) {
            if (matrix[i][n - 1 - i] !== max && matrix[i][n - 1 - i] !== min) {
                matrix[i][n - 1 - i] = 0;
            }
        }
    }
    
    // Выводим измененную матрицу
    result += "\nМатрица после замены (max=" + max + ", min=" + min + "):\n";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result += matrix[i][j] + "\t";
        }
        result += "\n";
    }
    
    alert(result);
}


function task1i() {
    let n = parseInt(prompt("Задание 1i: Введите количество дней для добавления"));
    
    if (isNaN(n)) {
        alert("Ошибка: введите число");
        return;
    }
    
    let currentDate = new Date();
    let newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + n);
    
    alert("Текущая дата: " + currentDate.toLocaleDateString() + "\n" +
          "Дата через " + n + " дней: " + newDate.toLocaleDateString());
}


function task1j() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    
    let septemberFirst = new Date(currentYear, 8, 1); // месяц 8 = сентябрь
    
    // Если уже прошло 1 сентября, берем следующего года
    if (currentDate > septemberFirst) {
        septemberFirst = new Date(currentYear + 1, 8, 1);
    }
    
    let monthsDiff = (septemberFirst.getFullYear() - currentDate.getFullYear()) * 12 +
                     (septemberFirst.getMonth() - currentDate.getMonth());
    
    alert("Текущая дата: " + currentDate.toLocaleDateString() + "\n" +
          "До 1 сентября осталось месяцев: " + monthsDiff);
}


function task2() {
    alert("Задание 2 выполняется в HTML-файле (таблица создана без JavaScript)");
}


function task3() {
    // Получаем элементы
    let div = document.querySelector('div');
    let ul = document.querySelector('ul');
    let secondLi = document.querySelectorAll('li')[1]; // второй li (индекс 1)
    
    alert("Задание 3:\n" +
          "div текст: " + div.textContent + "\n" +
          "ul содержит: " + ul.children.length + " элемента\n" +
          "второй li: " + secondLi.textContent);
}




function task4() {
    alert("Задание 4 выполняется после загрузки документа с указанного URL");
    
    // Этот код будет работать на странице https://cloud.mail.ru/public/CTM3/FPobCQB6N
    // Для демонстрации просто выводим сообщение
    console.log("Код для задания 4:");
    console.log("// Таблица с id='age-table'");
    console.log("let table = document.getElementById('age-table');");
    console.log("");
    console.log("// Все элементы label внутри таблицы");
    console.log("let labels = table.querySelectorAll('label');");
    console.log("");
    console.log("// Первый td в таблице");
    console.log("let firstTd = table.querySelector('td');");
    console.log("");
    console.log("// Форма с именем 'search'");
    console.log("let form = document.querySelector('form[name=\"search\"]');");
    console.log("");
    console.log("// Первый input в форме");
    console.log("let firstInput = form.querySelector('input');");
    console.log("");
    console.log("// Последний input в форме");
    console.log("let inputs = form.querySelectorAll('input');");
    console.log("let lastInput = inputs[inputs.length - 1];");
}



function task5() {
    // Получаем все ячейки таблицы из задания 2
    let cells = document.querySelectorAll('table td');
    
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        // Получаем текст ячейки (формат "i:j")
        let text = cell.textContent;
        let parts = text.split(':');
        let row = parseInt(parts[0]);
        let col = parseInt(parts[1]);
        
        // Проверяем, четная ли сумма
        if ((row + col) % 2 === 0) {
            cell.style.backgroundColor = 'red';
            cell.style.color = 'white';
        }
    }
    
    alert("Задание 5: Ячейки с четной суммой i+j выделены красным");
}



function task6() {
    // Получаем все ссылки на странице
    let links = document.querySelectorAll('a');
    
    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        let href = link.getAttribute('href');
        
        if (href) {
            // Проверяем условия для внешней ссылки
            if (href.includes('://') && !href.startsWith('http://internal.com')) {
                link.style.color = 'orange';
            }
        }
    }
    
    alert("Задание 6: Внешние ссылки стали оранжевыми");
}



function task7() {
    function clear(elem) {
        // Очищаем содержимое элемента
        elem.innerHTML = '';
    }
    
    let list = document.getElementById('list');
    if (list) {
        clear(list);
        alert("Задание 7: Список очищен");
    } else {
        alert("Задание 7: Элемент с id='list' не найден");
    }
}





function task8() {
    let count = parseInt(prompt("Задание 8: Сколько пунктов добавить в список?"));
    
    if (isNaN(count) || count < 1) {
        alert("Ошибка: введите положительное число");
        return;
    }
    
    // Создаем элемент ul, если его нет
    let ul = document.getElementById('dynamic-list');
    if (!ul) {
        ul = document.createElement('ul');
        ul.id = 'dynamic-list';
        document.body.appendChild(ul);
    }
    
    // Очищаем предыдущий список
    ul.innerHTML = '';
    
    // Запрашиваем каждый пункт
    for (let i = 1; i <= count; i++) {
        let text = prompt("Введите текст для пункта " + i);
        if (text !== null) {
            let li = document.createElement('li');
            li.textContent = text;
            ul.appendChild(li);
        }
    }
    
    alert("Задание 8: Список создан");
}





function task9() {
    alert("Задание 9: Начинаем создание карточек...");
    
    // Массивы для случайных имен
    let firstNames = ['Иван', 'Петр', 'Сергей', 'Анна', 'Мария', 'Елена', 'Алексей', 'Дмитрий'];
    let lastNames = ['Иванов', 'Петров', 'Сидоров', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев'];
    
    // Функция для генерации случайного имени
    function getRandomName() {
        let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        return firstName + ' ' + lastName;
    }
    
    // Создаем контейнер для карточек, если его нет
    let container = document.getElementById('cards-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'cards-container';
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.gap = '10px';
        container.style.marginTop = '20px';
        document.body.appendChild(container);
    }
    
    let counter = 0;
    let maxCards = 6;
    
    // Функция для создания одной карточки
    function createCard() {
        counter++;
        
        // Создаем карточку
        let card = document.createElement('div');
        card.className = 'card';
        card.style.border = '1px solid #ccc';
        card.style.borderRadius = '5px';
        card.style.padding = '10px';
        card.style.width = '200px';
        card.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        
        // Создаем изображение
        let img = document.createElement('img');
        img.src = 'https://thispersondoesnotexist.com/?' + counter;
        img.alt = 'Random person';
        img.style.width = '100%';
        img.style.height = '200px';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '5px';
        
        // Создаем имя
        let nameElem = document.createElement('h3');
        nameElem.textContent = getRandomName();
        nameElem.style.margin = '10px 0 5px';
        
        // Добавляем все в карточку
        card.appendChild(img);
        card.appendChild(nameElem);
        
        // Добавляем карточку в контейнер
        container.appendChild(card);
        
        // Если достигли 6 карточек, останавливаем таймер
        if (counter >= maxCards) {
            clearInterval(intervalId);
            alert("Задание 9: Создано 6 карточек, таймер остановлен");
        }
    }
    
    // Запускаем таймер на создание карточек каждые 2 секунды
    let intervalId = setInterval(createCard, 2000);
    
    // Сохраняем ID таймера глобально, чтобы можно было остановить вручную
    window.cardInterval = intervalId;
}

// -------------------------------------------------
// Функция для запуска всех заданий
// -------------------------------------------------
function runAllTasks() {
    task1a();
    task1b();
    task1c();
    task1d();
    task1e();
    task1f();
    task1g();
    task1h();
    task1i();
    task1j();
    task3();
    task5();
    task6();
    task7();
    task8();
    task9();
}