const fields = document.querySelector('.fields')
const crossHTML =  '<div class="x"></div>'
const zeroHTML = '<div class="circle"></div>'
let step = 0
let crossesWin = 0
let zeroesWin = 0
let drawWin = 0
let hod = 0

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
    draw.innerHTML = drawWin
    crosses.innerHTML = crossesWin
    zeroes.innerHTML = zeroesWin
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
    const textDraw = 'Ничья'
    if(getIsCrossesWin()){
        alert(textCrosses)
        crossesWin++
    }
    else if (getIsZeroesWin()){
        alert(textZeroes)
        zeroesWin++
    }
    else if(!getIsZeroesWin() && !getIsZeroesWin()){
        hod++
    }
    if(hod === 9){
        alert(textDraw)
        drawWin++
    }
}

const crosses = document.querySelector('.Crosses_win')
const zeroes = document.querySelector('.Zeroes_win')
const draw = document.querySelector('.draw')



let btm = document.querySelector('.go-game')
function clear() {
     for (let i = 0; i < allField.length; i++) {
          allField[i].innerHTML = ''
     }
    step = 0
    hod = 0
}
btm.onclick = clear




