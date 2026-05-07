// ============================================
// Модуль humansData
// ============================================

// Списки для случайной генерации
const firstNamesMale = ['Иван', 'Петр', 'Алексей', 'Дмитрий', 'Максим', 'Владимир', 'Андрей'];
const firstNamesFemale = ['Мария', 'Анна', 'Елена', 'Татьяна', 'Ольга', 'Светлана', 'Наталья'];
const lastNamesMale = ['Иванов', 'Петров', 'Сидоров', 'Смирнов', 'Кузнецов', 'Волков', 'Морозов'];
const lastNamesFemale = ['Иванова', 'Петрова', 'Сидорова', 'Смирнова', 'Кузнецова', 'Волкова', 'Морозова'];
const addresses = ['Москва, ул. Ленина, д.1', 'СПб, Невский пр., д.2', 'Новосибирск, Красный пр., д.3', 'Екатеринбург, ул. Мира, д.4'];
const phones = ['+7-900-123-45-67', '+7-901-234-56-78', '+7-902-345-67-89', '+7-903-456-78-90'];

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomAge() {
    return Math.floor(Math.random() * 80) + 1;
}

function generateRandomPerson(id) {
    const gender = Math.random() > 0.5 ? 'male' : 'female';
    
    let firstName, lastName;
    if (gender === 'male') {
        firstName = randomItem(firstNamesMale);
        lastName = randomItem(lastNamesMale);
    } else {
        firstName = randomItem(firstNamesFemale);
        lastName = randomItem(lastNamesFemale);
    }
    
    return {
        id: id,
        firstName: firstName,
        lastName: lastName,
        age: randomAge(),
        gender: gender,
        address: randomItem(addresses),
        phone: randomItem(phones)
    };
}

// Главная асинхронная функция
export async function getData() {
    const size = Math.floor(Math.random() * 16) + 5;
    
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = [];
            for (let i = 0; i < size; i++) {
                result.push(generateRandomPerson(i + 1));
            }
            resolve(result);
        }, 500);
    });
}