const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const numbers = [0,1,2,3,4,5,6,7,8,9]
const symbols = ['!','@','#','$','%','^','&','*','(',')']
let pwLength;
let password = '';
const optionsEl = document.getElementById('options');


function randomPicker(){
    let randomSelector = Math.floor(Math.random()*3) + 1;
    if(randomSelector === 1){
        return randomLetter()
    } else if(randomSelector === 2){
        let randomNumber = Math.floor(Math.random()*9);
        return numbers[randomNumber];
    } else {
        let randomSymbol = Math.floor(Math.random()*9);
        return symbols[randomSymbol].toString(); 
    }
}

function randomLetter(){
    let randomLetter = Math.floor(Math.random()*25);
    let randomCase = Math.floor(Math.random()*2) + 1;
    let letter = letters[randomLetter];
    if(randomCase == 1){
        return letter.toUpperCase();
    } else {return letter;}
}

function generatePassword(){
    pwLength = document.getElementById('passwordLength').value;
    let passwordCharacter = '';
    password = '';
    for(let i = 0; i < pwLength; i++){
        passwordCharacter = randomPicker();
        password += passwordCharacter;
    }
    return password;
}

function runGenerator(){
    let runCount = 4;
    optionsEl.innerHTML = '';
    for(let i = 0; i < runCount; i++){
        let holder = document.createElement('div');
        let generatedPassword = generatePassword();
        holder.innerText = generatedPassword;
        optionsEl.appendChild(holder);
    }
}
