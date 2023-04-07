const relemlem = document.querySelectorAll('span');

function addE0() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[0]) {
            relemlem[0].style.cssText = 'opacity: .9; background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);  color: rgb(255, 255, 255);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[0]) {
        relemlem[0].style.cssText = 'left: 100px;'
    }
})

function addEl() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[1]) {
            relemlem[1].style.cssText = 'left: 40px; transform: rotateY(300deg); background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[1]) {
        relemlem[1].style.cssText = 'left: 100px;'
    }
})
function addE2() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[2]) {
            relemlem[2].style.cssText = 'left: 70px; transform: rotateY(90deg); background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[2]) {
        relemlem[2].style.cssText = 'left: 130px;'
    }
})
function addE3() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[3]) {
            relemlem[3].style.cssText = 'left: 70px; width: 0px; height: 0px; background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[3]) {
        relemlem[3].style.cssText = 'left: 160px;'
    }
})
function addE4() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[4]) {
            relemlem[4].style.cssText = 'left: 70px; width: 0px; height: 0px; background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[4]) {
        relemlem[4].style.cssText = 'left: 190px;'
    }
})
function addE5() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[5]) {
            relemlem[5].style.cssText = ' left: 340px; width: 0px; height: 0px; background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[5]) {
        relemlem[5].style.cssText = 'left: 220px;'
    }
})

function addE6() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[6]) {
            relemlem[6].style.cssText = 'left: 340px; width: 0px; height: 0px; background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[6]) {
        relemlem[6].style.cssText = 'left: 250px;'
    }
})
function addE7() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[7]) {
            relemlem[7].style.cssText = 'left: 340px; transform: rotateY(90deg); background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[7]) {
        relemlem[7].style.cssText = 'left: 280px;'
    }
})
function addE8() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[8]) {
            relemlem[8].style.cssText = 'left: 370px; transform: rotateY(300deg); background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[8]) {
        relemlem[8].style.cssText = 'left: 310px;'
    }
})
addEl();

addE2();
addE3();
addE4();
addE5();
addE6();
addE7(); 
addE8();
addE0();