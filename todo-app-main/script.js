let themeBtn = document.querySelector('.dark-img')
let body_ = document.querySelector('body')
let txtBox = document.querySelectorAll('.txt-box')

console.log(body_.classList[1]);

themeBtn.addEventListener('click', () => {
    body_.classList.toggle('light-theme')
    console.log(body_.classList.value);
})

txtBox.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('box-checked')
    })
})
