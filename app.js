// button
const signIn = document.getElementsByClassName('sign-in')[0];  // Fix typo here
const signUp = document.getElementsByClassName('sign-up')[0];  // Assuming this is the correct class name
const signInBtn = document.querySelector('#signInBtn');
const signUpBtn = document.querySelector('#signUpBtn');

// input of sign in
const email = document.getElementById('email');
const password = document.getElementById('password');
const vaildLabel = document.querySelectorAll('.vaild-label')
// console.log(vaildLabel)

// inputs of sign up
const name1 = document.getElementById('name');
const fullName = document.getElementById('fullName');
const email2 = document.getElementById('email2');
const phone2 = document.getElementById('phone2');
const password2 = document.getElementById('password2');
const password3 = document.getElementById('password3');
const dd = document.getElementById('dd');
const mm = document.getElementById('mm');
const yy = document.getElementById('yy');
const cardId = document.getElementById('cardId');
const cardZip = document.getElementById('cardZip');
const submit = document.getElementById('submit');


// sign in / sign up hide / unhide
let clicked = true;
let colorCehcer = true;
signUpBtn.addEventListener('click',()=> {
    if(clicked){
        signIn.style.display = 'none';
        signUp.style.display = 'block';
    }
})


// home page
const homePage = document.getElementsByClassName('img-cotniaer')[0]
homePage.addEventListener('click', ()=> {
    if(clicked){
        signIn.style.display = 'block';
        signUp.style.display = 'none';
    }
})

// date function
const date = new Date;
const currentYear = date.getFullYear();
// console.log(currentYear)

const dateFunct = (el, len, label, labelIndex, num) => {
    let strnLen = 0;
        el.addEventListener('input', () =>{
            // algoritm of lenght of numbers
            strnLen++;
            // console.log(strnLen)
            if(strnLen === 2){
                el.value = el.value.slice(0, len);
                strnLen = 0;
            }else{
                el.value = el.value.slice(0, len)
            }

            // algoritm of inccorect button
            if(el.value > num){
                el.style.border = '1px solid red'
                label[labelIndex].style.display = 'block'
                el.addEventListener('focus', ()=>{
                    el.style.border = '1px solid red'
                })
                el.addEventListener('blur', ()=>{
                    el.style.border = '1px solid red'
                })
            }else{
                label[labelIndex].style.display = 'none'
                el.addEventListener('focus', ()=>{
                    el.style.border = '1px solid #044452'
                })
                el.addEventListener('blur', ()=>{
                    el.style.border = '1px solid #cfcfcf'
                })
            }
        })
    // console.log(yy.value.length)
}

// incorrect email and password sign in function
const incorrectInputFunct= (button, input, btnIndex) => {
    // normal focus 
    input.addEventListener('focus',()=> {
        input.style.border = '1px solid #044452 ';
    })
    input.addEventListener('blur',()=> {
        input.style.border = '1px solid #cfcfcf';
    })

    // functions of bluyr and focus
    const focusFunct = (el) => {
        if(!colorCehcer){
            el.addEventListener('focus', () =>{
                el.style.border = '1px solid #044452'
            })
        }else if(colorCehcer){
            el.removeEventListener('focus', () => {
                el.style.border = '1px solid red'
            })
        }
    }
    const blureFunct = (el) => {
        if(!colorCehcer){
            el.addEventListener('blur', () =>{
                el.style.border = '1px solid #cfcfcf'
            })
        }else if(colorCehcer){
            el.addEventListener('blur', () => {
                el.style.border = '1px solid red'
            })
        }
    }
    // event event listener
    button.addEventListener('click', () => {
        if(input.value === '' ){
            input.style.border = '1px solid red';
            vaildLabel[btnIndex].style.display = 'block'
            colorCehcer = true;
    
        }else if(input.value !== ''){
            input.style.border = '1px solid #cfcfcf'
            vaildLabel[btnIndex].style.display = 'none'
            colorCehcer = false;
        }
        focusFunct(input)
        blureFunct(input)
    console.log(colorCehcer)
    })
}

// email correction function
const emailCheker = (signBtn ,input, index) =>{
    let inputArr = ['@', 'gmail.com'];
    
    signBtn.addEventListener('click', () => {
        let emailValue = input.value;
        if(!emailValue.includes(inputArr[0] && inputArr[1])){ 
            input.style.border = '1px solid #FC5555'
            vaildLabel[index].style.display = 'block'
        }else{
            vaildLabel[index].style.display = 'none'
            input.style.border = '1px solid #cfcfcf'
        }
        if(!isNaN(emailValue)){
            
        }
    })
}

// password cheker
password2.addEventListener('input', () =>{
    password3.addEventListener('input', () => {
        if(password2.value != password3.value){
            // console.log('asdasda')
        }
        else{
            password3.border = '1px solid red'
    }
    })
})
// sign in
incorrectInputFunct(signInBtn, email, 0);
incorrectInputFunct(signInBtn, password, 1);

// sign up 
incorrectInputFunct(submit, name1, 2);
incorrectInputFunct(submit, fullName, 3);
incorrectInputFunct(submit, email2, 4);
incorrectInputFunct(submit, phone2, 5);
incorrectInputFunct(submit, password2, 6);
incorrectInputFunct(submit, password3, 7);
incorrectInputFunct(submit, dd, 8);
incorrectInputFunct(submit, mm, 9);
incorrectInputFunct(submit, yy, 10);
incorrectInputFunct(submit, cardId, 11);
incorrectInputFunct(submit, cardZip, 12);

// emal ckerer
emailCheker(signIn, email, 0);
emailCheker(submit, email2, 4);

// data functions
dateFunct(dd, 2, vaildLabel, 8, 31);
dateFunct(mm, 2, vaildLabel, 9, 12);
dateFunct(yy, 4, vaildLabel, 10, currentYear);
dateFunct(cardZip, 4, vaildLabel, 10);
dateFunct(cardId, 16, vaildLabel, 10);