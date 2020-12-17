let pDays = document.querySelector('.p-days')
let pHours = document.querySelector('.p-hours')
let pMinutes = document.querySelector('.p-minutes')
let pSeconds = document.querySelector('.p-seconds')

console.log(pDays, pHours, pMinutes, pSeconds);

const cdTimer = () => {
    if (parseInt(pSeconds.innerHTML) < 9 && parseInt(pSeconds.innerHTML) > 0) {
        pSeconds.innerHTML = '0' + (parseInt(pSeconds.innerHTML) -1)
        
    } else {
        if (parseInt(pSeconds.innerHTML) === 0) {
            pSeconds.innerHTML = '59'

            if (parseInt(pMinutes.innerHTML) < 9 && parseInt(pMinutes.innerHTML) > 0) {
                pMinutes.innerHTML = '0' + (parseInt(pMinutes.innerHTML) -1)

            } else {
                if (parseInt(pMinutes.innerHTML) === 00) {
                    pMinutes.innerHTML = '59'

                    if (parseInt(pHours.innerHTML) < 9 && parseInt(pHours.innerHTML) > 0) {
                        pHours.innerHTML = '0' + (parseInt(pHours.innerHTML) -1)
                    } else {
                        if (parseInt(pMinutes.innerHTML) === 00){
                            pHours.innerHTML = '23'

                            if (parseInt(pDays.innerHTML) < 9 && parseInt(pDays.innerHTML) > 0) {
                                pDays.innerHTML = '0' + (parseInt(pDays.innerHTML) -1)
                            } else {
                                pDays.innerHTML =parseInt(pDays.innerHTML) -1

                                if (pDays.innerHTML === '00' && pHours.innerHTML === '00' && pMinutes.innerHTML === '00' && pSeconds.innerHTML === '00') {
                                    clearInterval(runClock)
                                    alert('Finish')
                                }
                            }

                        } else {
                            pHours.innerHTML = parseInt(pHours.innerHTML) -1
                        }
                    }
                } else {
                    pMinutes.innerHTML = parseInt(pMinutes.innerHTML) -1
                }
            }
        } else {
            pSeconds.innerHTML = parseInt(pSeconds.innerHTML) -1 
        }
    }
}

let runClock = window.setInterval(cdTimer, 1000)



console.log(pDays, pHours, pMinutes, pSeconds);
