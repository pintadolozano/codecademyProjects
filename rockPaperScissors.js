const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
    return userInput;
  } else {
    console.log('Enter a valid choice.');
  }
}

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'scissors';
    case 2:
      return 'paper';
    }
}

function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a draw.';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'You lost.';
    } else {
      return 'You won.'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You won.';
    } else {
      return 'You lost.';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'You lost';
    } else {
      return 'You won';
    }
  }
}

function playGame() {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();