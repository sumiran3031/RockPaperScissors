let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

// Triggers a brief "pop" animation when the score updates
const animateScore = (para) => {
    para.classList.add("score-pop");
    setTimeout(() => para.classList.remove("score-pop"), 200);
};

const gencomputerchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3); 
    return options[randidx];
};

const drawgame = () => {
    msg.innerText = "Game was draw. Play Again.";
    msg.style.backgroundColor = "#555"; // Neutral gray for draw
};

const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerHTML = userscore;
        animateScore(userscorepara);
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerHTML = compscore;
        animateScore(compscorepara);
        msg.innerText = `You Lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "#8B4513"; // Brownish red for loss
    }
};

const playgame = (userchoice) => {
    const compchoice = gencomputerchoice();
    
    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // Standardized to lowercase to match the logic array
        const userchoice = choice.getAttribute("id").toLowerCase();
        playgame(userchoice);
    });
});
