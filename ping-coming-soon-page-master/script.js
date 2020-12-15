let errorM = document.querySelector('.errorM')
let notifyBtn = document.querySelector('#notify-btn')

const showError = (msg) => {
    errorM.firstElementChild.style.borderColor = '#ff5263'
    errorM.lastElementChild.style.display = 'block'
    errorM.lastElementChild.innerHTML = msg
}

const emailOk = (msg) => {
    errorM.firstElementChild.style.borderColor = '#ff5263'
    errorM.lastElementChild.style.display = 'block'
    errorM.lastElementChild.innerHTML = msg
}

const verifyEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const sendEmail = () => {
    let emailValue = errorM.firstElementChild.value

    if (emailValue === ''){
        showError('Whoops! It looks like you forgot to add your email')
    } else if (!verifyEmail(emailValue)){
        showError('Please provide a valid email address')
    } else {
        errorM.firstElementChild.style.borderColor = '#4f7df3'
        errorM.lastElementChild.style.display = 'none'
        errorM.lastElementChild.innerHTML = ''
        alert('Email OK!')
    }

}

notifyBtn.addEventListener('click', sendEmail)