var questionBox = document.getElementsByClassName('question-box')

Array.from(questionBox).forEach(e1 => {
    e1.addEventListener('click', function() {
        if (Array.from(this.children)[0].firstElementChild.style.fontWeight === '400') {
            Array.from(questionBox).forEach(e2 => {
                e2.firstElementChild.firstElementChild.style.fontWeight = '400'
                e2.lastElementChild.style.display = 'none'
            })
            Array.from(this.children)[0].firstElementChild.style.fontWeight = '700'
            Array.from(this.children)[1].style.display = 'block'
        } else {
            Array.from(this.children)[0].firstElementChild.style.fontWeight = '400'
            Array.from(this.children)[1].style.display = 'none'
        }
    })
})