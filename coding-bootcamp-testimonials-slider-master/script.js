var listP = ["“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”", "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"]
var listH1 = ["Tanya Sinclair", "John Tarkpor"]
var listH2 = ["UX Engineer", "Junior Front-end Developer"]
var listImg = ["./images/image-tanya.jpg", "./images/image-john.jpg"]
var listN = 0

var boxTxtP = document.querySelector('.box-txt-top p')
var boxTxtH1 = document.querySelector('.box-txt-bot h1')
var boxTxtH2 = document.querySelector('.box-txt-bot h2')
var mainImg = document.querySelector('.main-img')
var btnLeft = document.querySelector('.btn-left')
var btnRight = document.querySelector('.btn-right')

const changeParag = (list, i) => {
    boxTxtP.innerHTML = list[i]
}

const changeH1 = (list, i) => {
    boxTxtH1.innerHTML = list[i]
}

const changeH2 = (list, i) => {
    boxTxtH2.innerHTML = list[i]
}

const changeImg = (listImg, i) => {
    mainImg.src = listImg[i]
}

btnRight.addEventListener('click', function(){
    changeParag(listP, listN)
    changeH1(listH1, listN)
    changeH2(listH2, listN)
    changeImg(listImg, listN)

    if (listN === listP.length - 1){
        listN = 0
    } else {
        listN ++
    }
})

btnLeft.addEventListener('click', function(){
    changeParag(listP, listN)
    changeH1(listH1, listN)
    changeH2(listH2, listN)
    changeImg(listImg, listN)

    if (listN === 0){
        listN = listP.length - 1
    } else {
        listN --
    }
})