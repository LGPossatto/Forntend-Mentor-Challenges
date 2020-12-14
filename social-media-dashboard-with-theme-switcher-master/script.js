let body_ = document.querySelector('body')
let backgroundDetail_ = document.querySelector('.background-setColor')
let header_ = document.querySelector('.header-title')
let toggle_ = document.querySelector('.dark-toggle')
let topBlockF_ = document.querySelector('.big-block-face')
let topBlockT_ = document.querySelector('.big-block-twi')
let topBlockI_ = document.querySelector('.big-block-inst')
let topBlockY_ = document.querySelector('.big-block-you')
let over_ = document.querySelector('.overview')
let smallBlock_ = document.querySelectorAll('.small-block')
let darkMode = true

const kcilc = () =>{
    
    const changeBackground = (e) => {
        if (darkMode === true){
            e.style.backgroundColor = '#ffffff'
            darkMode = false
        } else {
            e.style.backgroundColor = '#1e202a'
            darkMode = true
        }
    }

    const changeBackgroundDetail = (e) => {
        if (darkMode === true){
            e.style.backgroundColor = '#f5f7ff'
        } else {
            e.style.backgroundColor = '#1f212e'
        }
    }
    
    const changeColor = (e) => {
        if (darkMode === true){
            e.firstElementChild.style.color = '#1e202a'
            e.lastElementChild.style.color = '#63687e'
        } else {
            e.firstElementChild.style.color = '#ffffff'
            e.lastElementChild.style.color = '#8b97c6'
        }
    }
    
    const changeToggle = (e) => {
        if (darkMode === true){
            e.lastElementChild.style.backgroundImage = 'none'
            e.lastElementChild.style.justifyContent = 'right'
            e.firstElementChild.style.color = '#aeb3cb'
            e.lastElementChild.firstElementChild.style.backgroundColor = 'white'
        } else {
            e.lastElementChild.style.backgroundImage = 'linear-gradient(to right, #378fe6, #3eda82)'
            e.lastElementChild.style.justifyContent = 'left'
            e.firstElementChild.style.color = '#ffffff'
            e.lastElementChild.firstElementChild.style.backgroundColor = '#1e202a'
        }
        
    }
    
    const changeTopBlock = (e) => {
        if (darkMode === true){
            e.style.backgroundColor = '#f0f2fa'
            e.firstElementChild.lastElementChild.style.color = '#63687e'
            e.firstElementChild.nextElementSibling.firstElementChild.style.color = '#1e202a'
            e.firstElementChild.nextElementSibling.lastElementChild.style.color =  '#63687e'
        } else {
            e.style.backgroundColor = '#252a41'
            e.firstElementChild.lastElementChild.style.color = '#8b97c6'
            e.firstElementChild.nextElementSibling.firstElementChild.style.color = '#ffffff'
            e.firstElementChild.nextElementSibling.lastElementChild.style.color =  '#8b97c6'
        }
    }
    
    if (darkMode === true){
        over_.firstElementChild.style.color = '#1e202a'
    } else {
        over_.firstElementChild.style.color = '#ffffff'
    }
    
    
    const changeSmallBlock = (e) => {
        if (darkMode === true){
            for(block of e){
                block.style.backgroundColor = '#f0f2fa'
                block.firstElementChild.firstElementChild.style.color = '#63687e'
                block.lastElementChild.firstElementChild.style.color = '#1e202a'
            }
        } else {
            for(block of e){
                block.style.backgroundColor = '#252a41'
                block.firstElementChild.firstElementChild.style.color = '#8b97c6'
                block.lastElementChild.firstElementChild.style.color = '#ffffff'
            }
        }
    }
    
    changeColor(header_)
    changeToggle(toggle_)
    changeTopBlock(topBlockF_)
    changeTopBlock(topBlockI_)
    changeTopBlock(topBlockT_)
    changeTopBlock(topBlockY_)
    changeSmallBlock(smallBlock_)
    changeBackgroundDetail(backgroundDetail_)
    changeBackground(body_)
}

toggle_.addEventListener('click', kcilc)