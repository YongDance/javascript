// 랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 고라는 버튼을 누름
// 만약 유저가 랜덤번호를 맞추면, 맞췄습니다.
// 랜덤번소가 < 유저번호  Down 
//랜덤번호가 > 유저번호 Up
//  reset 버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다 (버튼 비활성)
// 유저가 1-100 범위 밖에 숫자를 입력하면 알려준다. 기회를 꺽지 않는다.
// 유저가 이미 입력한 숫자를 입력해도 알려주고 기회를 깍지 않는다.


let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input") ;
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5; 
let chanceArea= document.getElementById("chance-area");
let history=[]


 playButton.addEventListener("click" ,play)
 resetButton.addEventListener("click", reset)
 userInput.addEventListener("focus", function(){userInput.value=""}) 


function pickRandomNum() {
      computerNum = Math.floor(Math.random () * 50)+1;
      console.log("정답", computerNum) ; 
      

}

function play() {
    let  userValue= userInput.value ; 
    if(userValue<1 || userValue >50) {
        resultArea.textContent = "1과 50 사이 값을 입력해 주세요."
        return; 
    }
    if (history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요 "
        return; 
    }

    chances--; 
    chanceArea.textContent =   ` 남은 기회 : ${chances} 번 `;
    console.log ("chance", chances);
    console.log( userValue);
    if (userValue < computerNum ) { 
        resultArea.textContent = "Up"
        console.log("Up") ;
        
         
      }  else if (userValue > computerNum) {
        resultArea.textContent = "Down"
        console.log("Down");
       
      } else { 
        resultArea.textContent = "맞추셨습니다"
        playButton.disabled= true ;
        console.log("맞추셨습니다");
        
             }

             history.push(userValue) 
             console.log(history)

             if ( chances <1) {
                resultArea.textContent = "Game Over " 
                playButton.disabled= true ;
             }
             }
    

    function reset() {
       userInput.value = ""
       pickRandomNum();
       playButton.disabled= false;
       chances=5;
       chanceArea.textContent =   ` 남은 기회 : ${chances} 번 `;

    }
    


pickRandomNum();