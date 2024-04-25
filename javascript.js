function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum <= 1 / 3) {
        return "rock";
    }
    if (randomNum <= 2 / 3) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice(message = "Rock, paper, or scissors?") {
    let choice = prompt(message).toLowerCase();
    switch (choice) {
        case "rock":
        case "paper":
        case "scissors":
            return choice;

        case "r":
            return "rock";
        
        case "p":
            return "paper";

        case "s":
            return "scissors";
    }

    return null;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper")
        return -1;
    if (humanChoice === "rock" && computerChoice === "scissors")
        return 1;
    if (humanChoice === "paper" && computerChoice === "rock")
        return 1;
    if (humanChoice === "paper" && computerChoice === "scissors")
        return -1;
    if (humanChoice === "scissors" && computerChoice === "rock")
        return -1;
    if (humanChoice === "scissors" && computerChoice === "paper")
        return 1;
    
    return 0;
}

const maxRounds = 5;
let humanScore = 0;
let computerScore = 0;

for (let i = 1; i <= maxRounds; i++) {
    // Get player choice
    let humanChoice = getHumanChoice();

    // Reattempt if player gives invalid choice
    while (humanChoice == null) {
        humanChoice = getHumanChoice(`Please enter "rock", "paper", or "scissors".\n`);
    }

    // Get computer choice
    const computerChoice = getComputerChoice();
    let message = `・Round ${i}・\nYou play ${humanChoice} against ${computerChoice}.`;

    // Get the outcome
    const outcome = playRound(humanChoice, computerChoice);
    switch (outcome) {
        case 1:
            humanScore++;
            message += "\nYou win!";
            break;

        case -1:
            computerScore++;
            message += "\nYou lose!";
            break;

        default:
            message += "\nThis round is a draw!";
    }

    message += `\nCurrent Scores: You: ${humanScore}  Computer: ${computerScore}`
    console.log(message);
}

// Output final scores
let finalMessage;
if (humanScore > computerScore) {
    finalMessage = "You win!";
} else if (humanScore < computerScore) {
    finalMessage = "You lose!";
} else {
    finalMessage = "It's a draw!";
}
finalMessage += `\nFinal Scores: You: ${humanScore}  Computer: ${computerScore}`
console.log(finalMessage);