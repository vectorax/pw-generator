const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const numbers = [0,1,2,3,4,5,6,7,8,9]
const symbols = ['!','@','#','$','%','^','&','*','(',')']
let pwLength = 10;
let password = '';
const optionsEl = document.getElementById('options');


function randomPicker(){
    let randomSelector = Math.floor(Math.random()*3) + 1;
    if(randomSelector === 1){
        let randomLetter = Math.floor(Math.random()*25);
        return letters[randomLetter];
    } else if(randomSelector === 1){
        let randomNumber = Math.floor(Math.random()*9);
        return numbers[randomNumber];
    } else {
        let randomSymbol = Math.floor(Math.random()*9);
        return symbols[randomSymbol].toString(); 
    }
}

function generatePassword(){
    let passwordCharacter = '';
    password = '';
    for(let i = 0; i <= pwLength; i++){
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
        console.log(holder)
        
        holder.innerText = generatedPassword;
        optionsEl.appendChild(holder);
    }
}

let result = generatePassword();
console.log(result);