let score = JSON.parse(localStorage.getItem('score')) || {
      win: 0,
      lose: 0,
      tie: 0
    }

    document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;

    function computerDecision() {
      const computerProb = Math.random();
      let computerMove = "";

      if(computerProb >= 0 && computerProb < 1/3){
        computerMove = "rock"
      } else if (computerProb >= 1/3 && computerProb < 2/3) {
        computerMove = "paper"
      } else {
        computerMove = "scissor"
      }

      return computerMove;
    }

    function playGame(playerMove) {
      let computerPick = computerDecision(); 
      let result = "";

      if(playerMove == 'rock'){
        if(computerPick == 'rock'){
          result = "Tie!"
        } else if (computerPick == 'paper'){
          result = "You Lose!"
        } else {
          result = "You Won!"
        }
      } else if(playerMove == 'paper'){
        if(computerPick == 'rock'){
          result = "You Won!"
        } else if (computerPick == 'paper'){
          result = "Tie!"
        } else {
          result = "You Lose!"
        }
      } else if(playerMove == 'scissor'){
        if(computerPick == 'rock'){
          result = "You Lose!"
        } else if (computerPick == 'paper'){
          result = "You Won!"
        } else {
          result = "Tie!"
        }
      }

      if(result == 'You Won!'){
        score.win += 1
      } else if(result == 'You Lose!'){
        score.lose += 1
      } else {
        score.tie += 1
      }

      localStorage.setItem('score', JSON.stringify(score));

      document.querySelector('.js-result').innerHTML = `${result}`
      document.querySelector('.js-move').innerHTML = `You: <img src="images/${playerMove}-emoji.png" class="${playerMove}-image""></img> - Enemy: <img src="images/${computerPick}-emoji.png" class="${computerPick}-image"></img>`
      document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
      
    }

    function resetScore() {
      let score = {
      win: 0,
      lose: 0,
      tie: 0
    }

    localStorage.removeItem('score')
    document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
    }

   