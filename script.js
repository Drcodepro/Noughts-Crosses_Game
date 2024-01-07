let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let popUp = document.querySelector("#popUp");
let newGameBtn = document.querySelector("#newGameBtn");
let winMsg = document.querySelector("#popUp h1");

let turnO = true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=> {
    
    box.addEventListener("click",(event)=>{
      if(turnO){
        event.target.style.color = "#A30202"
        event.target.innerText="o";
        turnO = false;
        console.log(turnO);
      }
      else{
        event.target.style.color = "#0000FF"
        event.target.innerText="x";
        turnO=true;
      }
      box.disabled = true;  //turning button disabled ,so we can't change the value of clicked boxes(button) 
    
      checkWinner();  // check if any player wins
    });
});



// checking who is winner 

function checkWinner(){

    winPatterns.forEach((pattern)=>{

        let b1 = boxes[pattern[0]].innerText;
        let b2 = boxes[pattern[1]].innerText;
        let b3 = boxes[pattern[2]].innerText;
       
        if( b1!=="" &&  b2!=="" &&  b3!==""){
            if(b1===b2 && b2===b3){
                boxDisable();
                winMsg.innerText = `"${b1}" WON The Game`;
                popUp.style.display="initial";
                resetBtn.style.display="none"
            }
        }
    })
}


// reset the game by clicking the reset button
resetBtn.addEventListener("click",()=>{
    resetfunc();
})


// start new game when click on the new game button
newGameBtn.addEventListener("click",()=>{
    popUp.style.display="none"
    resetBtn.style.display="initial"
    resetfunc();
});


//  function for reset game 

function resetfunc(){
    turnO=true;
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false; 
    })
}


// if anyone wins so  then can't change the values of te boxes
function boxDisable(){
    boxes.forEach((box)=>{
        box.disabled = true; 
    })
}