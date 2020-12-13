let buttonSubmit = document.querySelector('#button-submit')

let inputFname = document.querySelector('#input-fname')
let inputLname = document.querySelector('#input-lname')
let inputEmail = document.querySelector('#input-email')
let inputPassword = document.querySelector('#input-password')

let errFname = document.querySelector('#err-fname')
let errLname = document.querySelector('#err-lname')
let errEmail = document.querySelector('#err-email')
let errPassword = document.querySelector('#err-password')

console.log(buttonSubmit);

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('ok');
    let allOk = false
    allOk = validateName(inputFname, errFname)
    allOk = validateName(inputLname, errLname)
    allOk = validateEmail(inputEmail, errEmail)
    allOk = validatePassword(inputPassword, errPassword)

    if (allOk){
        document.querySelector("#my-form").submit(); 
    }
})

const validateName = (input_x, err_x) => {
    if (input_x.value === ''){
        err_x.style.display = 'block'
        input_x.style.backgroundImage = 'url(./images/icon-error.svg)'

        return false
    }

    err_x.style.display = 'none'
    input_x.style.backgroundImage = 'none'
    
    return true
}

const validatePassword = (input_x, err_x) => {
    if (input_x.value === ''){
        err_x.style.display = 'block'
        input_x.style.backgroundImage = 'url(./images/icon-error.svg)'

        return false
    }

    err_x.style.display = 'none'
    input_x.style.backgroundImage = 'none'
    
    return true
}

const validateEmail = (input_x, err_x) => {
    let emailSplit = input_x.value.split('')
    let atOk = 0
    let dotOk = 0

    for (let i = 0; i < emailSplit.length; i++){
        if (emailSplit[i] === '@'){
            atOk++
        } else if (emailSplit[i] === '.'){
            dotOk++
        }
    }

    if (atOk === 1 && dotOk === 1){
        err_x.style.display = 'none'
        input_x.style.backgroundImage = 'none'
        
        return true
    }
    
    err_x.style.display = 'block'
    input_x.style.backgroundImage = 'url(./images/icon-error.svg)'

    return false
}