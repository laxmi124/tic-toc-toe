
let turn = 'X';
let isGameOver = false;
// let dingAudio = new Audio('ding.mp3');
let winingSound = new Audio('winingSound.mp3');
let ding = new Audio('ding.wav');
let dong = new Audio('dong.wav');

const changeTurn =()=>{
    return turn === 'X' ? '0' : 'X'; 
}

const checkWin =()=>{
    let boxTexts = document.getElementsByClassName('boxText');
    
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
     ];

     wins.forEach((e)=>{
         if (boxTexts[e[0]].innerText == boxTexts[e[1]].innerText && boxTexts[e[1]].innerText == boxTexts[e[2]].innerText && boxTexts[e[1]].innerText !== '' ){
             document.getElementsByClassName('info')[0].innerHTML = boxTexts[e[0]].innerHTML + "    won";
            isGameOver = true;
            // document.getElementsByClassName('infoContainer').style.display = "flex";
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
            winingSound.play()
            return true
        }
    })
}

if(checkWin){
    console.log('win')
    // document.getElementsByClassName('container').style.hover.cursor = 'no-drop';
}
const box = document.getElementsByClassName('box');

Array.from(box).forEach((element)=>{
    
    let boxText = element.querySelector('.boxText');
   
    element.addEventListener('click',()=>{
        if (boxText.innerHTML === '' && !isGameOver){
            boxText.innerHTML = turn;
            turn =  changeTurn();
            if (turn == 'X'){
                ding.play()
          }else{
              dong.play()
            }
            if(!checkWin()){
                check();
            }
            if (!isGameOver){
              let info = document.getElementsByClassName('info')[0].innerHTML = `turn for ${turn}`
            }
        }
    })
})

const reset = document.getElementById('reset');

reset.addEventListener('click',()=>{
    
    let boxTexts = document.querySelectorAll('.boxText');
    
    Array.from(boxTexts).forEach((e)=>{
        e.innerHTML = ''
    });
    turn = 'X';
    isGameOver = false;
    document.getElementsByClassName('info')[0].innerHTML = `turn for ${turn}`
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0";
    document.querySelector('.imgBox').getElementsByTagName('img')[1].style.width = "0";
});

function check(){
    let boxTexts = document.querySelectorAll('.boxText');
    let count = 0;
    Array.from(boxTexts).forEach((e)=>{
        if (e.innerHTML !== ''){
            count++;
       }
    })
    console.log(Array)
    if (count === 9 && !checkWin()){
            isGameOver = true;
            document.getElementsByClassName('info')[0].innerHTML =`it's a draw`;
        document.querySelector('.imgBox').getElementsByTagName('img')[1].style.width = "200px";
        console.log('opps')
    }
    
}
