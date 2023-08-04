const answerOption = ['Rock', 'Paper', 'Scissors'];
const cpuAnswerEntry = [];
const humanAnswerEntry = [];

function computerPlay() {
    return Math.floor(Math.random() * 3);
}

function humanAnswer() {
    let ans;
    do {
        ans = parseInt(prompt('Enter 0 for "Rock", 1 for "Paper", or 2 for "Scissors"', 0));
    } while (ans < 0 || ans > 2);
    return ans;
}

function determineWinner(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
        return 'tie';
    } else if ((userChoice === 0 && cpuChoice === 2) || 
               (userChoice === 1 && cpuChoice === 0) || 
               (userChoice === 2 && cpuChoice === 1)) {
        return 'win';
    } else {
        return 'lose';
    }
}

function playRound() {
    const compAnswer = computerPlay();
    const userAnswer = humanAnswer();

    const result = determineWinner(userAnswer, compAnswer);

    const resultDiv = document.getElementById('result');
    const userChoiceDiv = document.getElementById('userChoice');
    const cpuChoiceDiv = document.getElementById('cpuChoice');

    if (result === 'tie') {
        resultDiv.textContent = `It's a tie.`;
    } else if (result === 'win') {
        resultDiv.textContent = `You win!`;
    } else {
        resultDiv.textContent = `You lost to the computer.`;
    }

    userChoiceDiv.textContent = `You chose: ${answerOption[userAnswer]}`;
    cpuChoiceDiv.textContent = `Computer chose: ${answerOption[compAnswer]}`;

    cpuAnswerEntry.push(answerOption[compAnswer]);
    humanAnswerEntry.push(answerOption[userAnswer]);
}

console.log(humanAnswerEntry);
