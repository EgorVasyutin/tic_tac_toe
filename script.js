const fields = document.querySelector('.fields')
const crossHTML =  '<div class="x"></div>'
const zeroHTML = '<div class="circle"></div>'
let step = 0
let crossesWin = 0
let zeroesWin = 0
let drawWin = 0
let hod = 0
const hodXOrO = document.querySelector('.hodXOrO')
function ticTacToe(event) {
    if(event.target.classList.contains('field')){
        if(step % 2 === 0){
            event.target.innerHTML = crossHTML
            hodXOrO.innerHTML = 'O'
        }else {
            event.target.innerHTML = zeroHTML
            hodXOrO.innerHTML = 'X'
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
        if ( allField[winCombination[0]].innerHTML === crossHTML &&
            allField[winCombination[1]].innerHTML === crossHTML &&
            allField[winCombination[2]].innerHTML === crossHTML) {
            allField[winCombination[0]].style.backgroundColor = 'red'
            allField[winCombination[1]].style.backgroundColor = 'red'
            allField[winCombination[2]].style.backgroundColor = 'red'
        }
        return allField[winCombination[0]].innerHTML === crossHTML &&
               allField[winCombination[1]].innerHTML === crossHTML &&
               allField[winCombination[2]].innerHTML === crossHTML
    })

}

function getIsZeroesWin() {
    return winCombinations.some((winCombination)=> {
        if( allField[winCombination[0]].innerHTML === zeroHTML &&
            allField[winCombination[1]].innerHTML === zeroHTML &&
            allField[winCombination[2]].innerHTML === zeroHTML){
            allField[winCombination[0]].style.backgroundColor = 'red'
            allField[winCombination[1]].style.backgroundColor = 'red'
            allField[winCombination[2]].style.backgroundColor = 'red'
        }
        return allField[winCombination[0]].innerHTML === zeroHTML &&
               allField[winCombination[1]].innerHTML === zeroHTML &&
               allField[winCombination[2]].innerHTML === zeroHTML
    })
}

const strWin = document.querySelector('.who_win')
function winnerCheck() {
    const textCrosses = 'Победили крестики'
    const textZeroes = 'Победили нолики'
    const textDraw = 'Ничья'

    if(getIsCrossesWin()){
        alert(textCrosses)
        crossesWin++
        strWin.innerHTML = 'Crosses win'
        strWin.style.visibility =  'visible'
    }
    else if (getIsZeroesWin()){
        alert(textZeroes)
        zeroesWin++
        strWin.innerHTML = 'Zeroes win'
        strWin.style.visibility =  'visible'
    }
    else if(!getIsZeroesWin() && !getIsZeroesWin()){
        hod++
    }
    if(hod === 9){
        alert(textDraw)
        drawWin++
        strWin.innerHTML = 'Draw'
        strWin.style.visibility =  'visible'
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
    hodXOrO.innerHTML = 'X'
    strWin.style.visibility = 'hidden'
}
btm.onclick = clear




