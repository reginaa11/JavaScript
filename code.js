function updateIndicator(step) {
    const indicator = document.getElementById('stepIndicator');
    const fill = document.getElementById('indicatorFill');
    indicator.classList.remove('invisible'); 
    let percent = 0;
    if (step === 1) percent = 33;
    else if (step === 2) percent = 66;
    else if (step === 3) percent = 100;
    fill.style.width = percent + '%';
}

const countries = ["Россия", "США", "Канада", "Германия", "Франция", 
                   "Италия", "Испания", "Китай", "Япония", "Индия"];
const countrySelect = document.getElementById('country');
for(let i = 0; i < countries.length; i++) {
    const option = document.createElement('option');
    option.value = countries[i];
    option.textContent = countries[i];
    countrySelect.appendChild(option);
}

const sections = {
    welcome: document.getElementById('frame_1'),
    step1: document.getElementById('frame_2'),
    step2: document.getElementById('frame_3'),
    step3: document.getElementById('frame_4'),
    final: document.getElementById('frame_5')
};

function showSection(sectionName) {
    for(let key in sections) {
        sections[key].classList.add('invisible');
    }
    sections[sectionName].classList.remove('invisible');
}

function checkStep1() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;
    
    const allFilled = firstName && lastName && email && address && password && confirm;
    const passwordsMatch = password === confirm;
    
    document.getElementById('nextStep1').disabled = !(allFilled && passwordsMatch);
}

const inputs1 = document.querySelectorAll('#personalForm input, #personalForm select');
for(let i = 0; i < inputs1.length; i++) {
    inputs1[i].addEventListener('input', checkStep1);
}

document.getElementById('startRegBtn').onclick = function() {
    showSection('step1');
    updateIndicator(1);
};
document.getElementById('cancelStep1').onclick = function() {
    showSection('welcome');
};
document.getElementById('nextStep1').onclick = function() {
    showSection('step2');
    updateIndicator(2);
};

let codeVerified = false;

document.getElementById('sendCodeBtn').onclick = function() {
    const phone = document.getElementById('phone').value.trim();
    if(phone) {
        document.getElementById('codeSection').style.display = 'block';
    } else {
        alert("Введите номер телефона");
    }
};

document.getElementById('verifyCodeBtn').onclick = function() {
    const code = document.getElementById('verificationCode').value;
    if(code.length === 4 && !isNaN(code)) {
        codeVerified = true;
        document.getElementById('nextStep2').disabled = false;
        alert("Код подтверждён!");
    } else {
        alert("Введите 4 цифры");
    }
};

document.getElementById('backStep2').onclick = function() {
    showSection('step1');
    updateIndicator(1);
};
document.getElementById('nextStep2').onclick = function() {
    if(codeVerified) {
        showSection('step3');
        updateIndicator(3);
    }
};

const cardParts = document.querySelectorAll('.card-part');
for(let i = 0; i < cardParts.length; i++) {
    cardParts[i].addEventListener('input', function() {
        if(this.value.length === 4 && i < cardParts.length - 1) {
            cardParts[i + 1].focus(); 
        }
    });
}

function checkStep3() {
    let cardFull = true;
    for(let i = 0; i < cardParts.length; i++) {
        if(cardParts[i].value.length !== 4) cardFull = false;
    }
    const expiry = document.getElementById('expiry').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const agree = document.getElementById('agreeCheckbox').checked;
    document.getElementById('nextStep3').disabled = !(cardFull && expiry && cvv && agree);
}

for(let i = 0; i < cardParts.length; i++) {
    cardParts[i].addEventListener('input', checkStep3);
}
document.getElementById('expiry').addEventListener('input', checkStep3);
document.getElementById('cvv').addEventListener('input', checkStep3);
document.getElementById('agreeCheckbox').addEventListener('change', checkStep3);

document.getElementById('backStep3').onclick = function() {
    showSection('step2');
    updateIndicator(2);
};
document.getElementById('nextStep3').onclick = function() {
    showSection('final');
    document.getElementById('stepIndicator').classList.add('invisible');
};