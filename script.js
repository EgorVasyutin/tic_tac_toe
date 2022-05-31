const counter = document.querySelector('.counter')
let hod = 0
function ticTacToe(event) {
    if(event.target.classList.contains('field')){
        if(hod % 2 === 0){
            event.target.innerHTML = '<div class="x"></div>'
        }else {
            event.target.innerHTML = '<div class="circle"></div>'
        }
        hod++
    }
    winnerCheck()
}
counter.onclick = ticTacToe

const allField = document.getElementsByClassName('field')
function winnerCheck() {
    if (allField[0].innerHTML === '<div class="x"></div>' && allField[1].innerHTML === '<div class="x"></div>' && allField[2].innerHTML === '<div class="x"></div>') alert('Победили крестики')
    if (allField[3].innerHTML === '<div class="x"></div>' && allField[4].innerHTML === '<div class="x"></div>' && allField[5].innerHTML === '<div class="x"></div>') alert('Победили крестики')
    if (allField[0].innerHTML === '<div class="x"></div>' && allField[4].innerHTML === '<div class="x"></div>' && allField[8].innerHTML === '<div class="x"></div>') alert('Победили крестики')
    if (allField[6].innerHTML === '<div class="x"></div>' && allField[7].innerHTML === '<div class="x"></div>' && allField[8].innerHTML === '<div class="x"></div>') alert('Победили крестики')
    if (allField[2].innerHTML === '<div class="x"></div>' && allField[4].innerHTML === '<div class="x"></div>' && allField[6].innerHTML === '<div class="x"></div>') alert('Победили крестики')
    if (allField[0].innerHTML === '<div class="x"></div>' && allField[3].innerHTML === '<div class="x"></div>' && allField[6].innerHTML === '<div class="x"></div>') alert('Победили крестики')
    if (allField[1].innerHTML === '<div class="x"></div>' && allField[4].innerHTML === '<div class="x"></div>' && allField[7].innerHTML === '<div class="x"></div>') alert('Победили крестики')
    if (allField[2].innerHTML === '<div class="x"></div>' && allField[5].innerHTML === '<div class="x"></div>' && allField[8].innerHTML === '<div class="x"></div>') alert('Победили крестики')
    if (allField[0].innerHTML === '<div class="circle"></div>' && allField[1].innerHTML === '<div class="circle"></div>' && allField[2].innerHTML === '<div class="circle"></div>') alert('Победили нолики')
    if (allField[3].innerHTML === '<div class="circle"></div>' && allField[4].innerHTML === '<div class="circle"></div>' && allField[5].innerHTML === '<div class="circle"></div>') alert('Победили нолики')
    if (allField[0].innerHTML === '<div class="circle"></div>' && allField[4].innerHTML === '<div class="circle"></div>' && allField[8].innerHTML === '<div class="circle"></div>') alert('Победили нолики')
    if (allField[6].innerHTML === '<div class="circle"></div>' && allField[7].innerHTML === '<div class="circle"></div>' && allField[8].innerHTML === '<div class="circle"></div>') alert('Победили нолики')
    if (allField[2].innerHTML === '<div class="circle"></div>' && allField[4].innerHTML === '<div class="circle"></div>' && allField[6].innerHTML === '<div class="circle"></div>') alert('Победили нолики')
    if (allField[0].innerHTML === '<div class="circle"></div>' && allField[3].innerHTML === '<div class="circle"></div>' && allField[6].innerHTML === '<div class="circle"></div>') alert('Победили нолики')
    if (allField[1].innerHTML === '<div class="circle"></div>' && allField[4].innerHTML === '<div class="circle"></div>' && allField[7].innerHTML === '<div class="circle"></div>') alert('Победили нолики')
    if (allField[2].innerHTML === '<div class="circle"></div>' && allField[5].innerHTML === '<div class="circle"></div>' && allField[8].innerHTML === '<div class="circle"></div>') alert('Победили нолики')
}
let btm = document.querySelector('.go-game')
function clear() {
    for (let i = 0; i < allField; i++) {
         allField[i].innerHTML = ''
    }
}
btm.onclick = clear



