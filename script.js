const fields = document.querySelector('.fields')
const crossHTML =  '<div class="x"></div>'
const zeroHTML = '<div class="circle"></div>'
let step = 0

function ticTacToe(event) {
    if(event.target.classList.contains('field')){
        if(step % 2 === 0){
            event.target.innerHTML = crossHTML
        }else {
            event.target.innerHTML = zeroHTML
        }
        step++
    }
    winnerCheck()
}
fields.onclick = ticTacToe

const winCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

const allField = document.getElementsByClassName('field')

function getIsCrossesWin() {
    return winCombinations.some((winCombination)=> {
        return  allField[winCombination[0]].innerHTML === crossHTML &&
                allField[winCombination[1]].innerHTML === crossHTML &&
                allField[winCombination[2]].innerHTML === crossHTML
    })
}

function getIsZeroesWin() {
    return winCombinations.some((winCombination)=> {
        return  allField[winCombination[0]].innerHTML === zeroHTML &&
            allField[winCombination[1]].innerHTML === zeroHTML &&
            allField[winCombination[2]].innerHTML === zeroHTML
    })
}

function winnerCheck() {
    const textCrosses = 'Победили крестики'
    const textZeroes = 'Победили нолики'
    if(getIsCrossesWin()) alert(textCrosses)
    else if(getIsZeroesWin()) alert(textZeroes)
}

let btm = document.querySelector('.go-game')
function clear() {
    for (let i = 0; i < allField; i++) {
         allField[i].innerHTML = ''
    }
}
btm.onclick = clear



