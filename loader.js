let width = 0;
const loaderBar = document.getElementById('loaderBar');
const loaderSection = document.getElementById('loader');
const mainPage = document.getElementById('page');

const interval = setInterval(() => {
    if (width >= 100) {
        clearInterval(interval);          // останавливаем таймер
        loaderSection.style.display = 'none';  // прячем лоадер
        mainPage.classList.remove('invisible'); // показываем страницу
    } else {
        width += 2;
        loaderBar.style.width = width + '%';
    }
}, 20); 