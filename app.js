function rpsGame(yourChoice){
    console.log(yourChoice);

    var humanChoice,botChoice;

    humanChoice = yourChoice.id;

    botChoice = randomNoToChoice(selectRandom())

    console.log('Any choice:', botChoice);

    results = winnerDecider(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message);
  
    
}


function selectRandom(){

    return Math.floor(Math.random() * 3);
}

function randomNoToChoice(number){

    return ['rock', 'paper', 'scissors'][number];

}

function winnerDecider(yourChoice, computerChoice){

    var rpsDB = {
        'rock': {'scissors':1 , 'rock':0.5 , 'paper':0},
        'paper': {'rock':1 , 'paper':0.5 , 'scissors':0},
        'scisssors': {'paper':1, 'scissors':0.5, 'rock':0}
        
    };

    var yourScore =      rpsDB[yourChoice][computerChoice];
    var computerScore =  rpsDB[computerChoice][yourChoice];


    return [yourScore, computerScore]
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

function frontEnd(humanImageChoice, botImageChoice , finalMessage){

    var imgDB = {
        'rock': document.getElementById('rock').src,
        'scissors': document.getElementById('paper').src,
        'paper': document.getElementById('scissors').src
    }

    //to remove images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //div
    humanDiv  = document.createElement('div');
    botDiv  = document.createElement('div');
    messageDiv  = document.createElement('div');


    humanDiv.innerHTML = "<img src='" + imgDB[humanChoice] + "' height=150px width=150px>"

    
    messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; font-size: 40px padding:30px; '>" + finalMessage['message'] + "</h1>"

    botDiv.innerHTML = "<img src='" + imgDB[botChoice] + "' height=150px width=150px>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);

    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    





}