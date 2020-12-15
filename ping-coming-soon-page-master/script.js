let errorM = document.querySelector('.errorM')
let notifyBtn = document.querySelector('#notify-btn')

const showError = (msg) => {
    errorM.firstElementChild.style.borderColor = '#ff5263'
    errorM.lastElementChild.style.display = 'block'
    errorM.lastElementChild.innerHTML = msg
}

const verifyAt = (emailSplitW) => {
    if (emailSplitW === '@'){
        return true
    }
}

const verifyDot = (emailSplitW) => {
    if (emailSplitW === '.'){
        return true
    }
}

const verifyEmail = (email) => {
    let emailw1 = email.split('')
    let emailw2 = email.split('@')[1]
    let dotOk = 0
    
    for (w1 of emailw1) {
        if (verifyAt(w1)){
            for (w2 of emailw2) {
                if (verifyDot(w2)){
                    dotOk++
                }
            }
        }
    }
    
    if (dotOk === 1) {
        return true
    }
}

const sendEmail = () => {
    let emailValue = errorM.firstElementChild.value

    if (emailValue === ''){
        showError('Whoops! It looks like you forgot to add your email')
    } else if (!verifyEmail(emailValue)){
        showError('Please provide a valid email address')
    } else {
        showError('Email OK!')
    }

}

notifyBtn.addEventListener('click', sendEmail)