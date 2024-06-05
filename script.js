let userSc = 0;
let compSc = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

const genCompChoice=()=>{
    const options=["stone","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawgame=()=>{
    msg.innerText="Game was Draw";
    msg.Style.backgroundColor="#081b31";
};

const showinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userSc++;
        userScorePara.innerText = userSc;
        msg.innerHTML =`you win!, your ${userChoice} beats ${compChoice}`;
        msg.Style.backgroundColor="green";

    }else{
        compSc++;
        compScorePara.innerText = compSc;
        msg.innerText = `you lost,${compChoice} beats ${userChoice}`;
        msg.Style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawgame();
    }else{
        let userWin =true;
        if(userChoice ==="stone"){
            userWin = compChoice ==="paper"? false:true;        }
        }if(userChoice === "paper"){
             userWin = compChoice ==="scissors"?false:true;
        }else{
        userWin= compChoice ==="stone"?false:true;
        }
       showinner(userWin,userChoice,compChoice);
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});