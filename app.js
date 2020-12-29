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

function winnerDecider(yourChoice, botChoice){

    var rpsDB = {
        'rock': {'scissor':1 , 'rock':0.5 , 'paper':0},
        'paper': {'rock':1 , 'paper':0.5 , 'scissor':0},
        'scisssor': {'paper':1, 'scissor':0.5, 'rock':0}
    };

    var yourScore = rpsDB[yourChoice][botChoice];
    var botScore = rpsDB[botChoice][yourChoice];


    return [yourChoice, computerChoice];
}

