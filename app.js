function rpsGame(yourChoice){
    console.log(yourChoice);
    var userChoice , computerChoice;
    computerChoice = randomNoToChoice(selectRandom);
    
}


function selectRandom(){

    return Math.floor(Math.random() * 3);
}

function randomNoToChoice(number){

    return ['rock', 'paper', 'scissor'][number];

}

