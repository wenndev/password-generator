const passwordInput = document.querySelector('#inputPasswordId');
const lengthInput = document.querySelector('.inputLengthId');
const infoLength = document.querySelector('[for="inputLengthId"]');
const btnGerar = document.querySelector('#btnGerar');


const checkLower = document.querySelector('.checkLowerId');
const checkUpper = document.querySelector('.checkUpperId');
const checkNumber = document.querySelector('.checkNumberId');
const checkSymbol = document.querySelector('.checkSymbolsId');


const numbers = [0,1,2,3,4,5,6,7,8,9];
const symbols = ["!","@","#","$","%"];


const caracters = Array.from(Array(26)).map((_,index) =>  index + 97);
const lowercaseCaracters = caracters.map((item) => String.fromCharCode(item));
const uppercaseCaracters = lowercaseCaracters.map((item) => item.toLocaleUpperCase());

infoLength.innerHTML = lengthInput.value;

lengthInput.addEventListener('change', () =>{
    infoLength.innerHTML = lengthInput.value;
});

btnGerar.addEventListener('click', () => {
    generatePassword(
        checkNumber.checked,
        checkSymbol.checked,
        checkLower.checked,
        checkUpper.checked,
        lengthInput.value,
    );
});

const generatePassword = (hasNumbers, hasSymbols, hasLower, hasUpper,length) =>{
    const newArray = [
        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : []),
        ...(hasLower ? lowercaseCaracters : []),
        ...(hasUpper ? uppercaseCaracters : []),  
    ];

    if (newArray.length === 0) return;

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex= Math.floor(Math.random() * newArray.length);
        password += newArray[randomIndex];
    }
    passwordInput.value = password;
}