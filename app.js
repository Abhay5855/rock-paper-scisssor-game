function rpsGame(yourChoice){
    console.log(yourChoice);

    var userChoice , computerChoice;

    userChoice = yourChoice.id;

    computerChoice = randomNoToChoice(selectRandom());

    console.log('Bot choice:', computerChoice);

    results = winnerDecider(userChoice, computerChoice);
    console.log(results);

    
}


function selectRandom(){

    return Math.floor(Math.random() * 3);
}

function randomNoToChoice(number){

    return ['rock', 'scissor', 'paper'][number];

}

function winnerDecider(yourChoice, botChoice){

    var rpsDB = {
        'rock': {'scissor':1 , 'rock':0.5 , 'paper':0},
        'scisssor': {'paper':1, 'scissor':0.5, 'rock':0},
        'paper': {'rock':1 , 'paper':0.5 , 'scissor':0}
    };

    var yourScore = rpsDB[yourChoice][botChoice];
    var botScore = rpsDB[botChoice][yourChoice];


    return [yourScore, botScore];
}

function finalMessage(yourScore , botScore){
    if(yourScore === 0){
        return{'message':'you lost!' , 'color':'red'};

    }

    else if(yourScore === 0.5){
        return{'message':'you tied!' , 'color':'yellow'};

    }

    else {
        return{'message':'you Won!' , 'color':'green'};

    }



    
}