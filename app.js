function rpsGame(yourChoice) {

    console.log(yourChoice);

    var humanChoice, botChoice;

    humanChoice = yourChoice.id;



    botChoice = randomNoToChoice(selectRandom());



    console.log('computer choice:', botChoice);

    results = winner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message);

    frontEnd(yourChoice.id, botChoice, message);

   


}


function selectRandom() {

    return Math.floor(Math.random() * 3);
}

function randomNoToChoice(number) {

    return ['rock', 'paper', 'scissor'][number];

}

function winner(yourChoice, computerChoice) {

    var rpsDB = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'paper': 1, 'scissor': 0.5, 'rock': 0 }

    };

    var yourScore = rpsDB[yourChoice][computerChoice];
    var computerScore = rpsDB[computerChoice][yourChoice];


    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'you lost!', 'color': 'red' };

    }

    else if (yourScore === 0.5) {
        return { 'message': 'you tied!', 'color': '#1D4ED8' };

    }

    else {
        return { 'message': 'you won!', 'color': 'green' };

    }

}

function frontEnd(humanImageChoice, botImageChoice, finalMessage) {

    var imgDB = {
        'rock': document.getElementById('rock').src,

        'paper': document.getElementById('paper').src,

        'scissor': document.getElementById('scissor').src
    };

    //to remove images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();



    //div
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');


    humanDiv.innerHTML = "<img src='" + imgDB[humanImageChoice] + "' width=150  style='box-shadow: 5px 10px  40px #2563EB'>" 


    messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; ' width=150  >" + finalMessage['message'] + "</h1>" 

    botDiv.innerHTML = "<img src='" + imgDB[botImageChoice] + "' width=150  style='box-shadow: 5px 10px  40px #DC2626'>" 

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);

    document.getElementById('flex-box-rps-div').appendChild(messageDiv);

    document.getElementById('flex-box-rps-div').appendChild(botDiv);


}



