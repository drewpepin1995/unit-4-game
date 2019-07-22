let wins = 0;
let losses = 0;
let yourScore = 0;
let targetScore = 0;
let newScore = 0;
let crystalOneValue = 0;
let crystalTwoValue = 0;
let crystalThreeValue = 0;
let crystalFourValue = 0;


function resetGame() {
    yourScore = 0;
    targetScore = Math.floor((Math.random() * (100-12) + 12));
    crystalOneValue = Math.floor((Math.random() * (12-1) + 1));
	crystalTwoValue = Math.floor((Math.random() * (12-1) + 1));
	crystalThreeValue = Math.floor((Math.random() * (12-1) + 1));
	crystalFourValue = Math.floor((Math.random() * (12-1) + 1));
	
	$("#wins").html("Wins : " + wins);
	$("#losses").html("Losses : " + losses);
	$("#targetScore").html("Target Score : " + targetScore);
	$("#yourScore").html("Your Score : " + yourScore);
}

function updateYourScore (newScore) {
    yourScore = newScore;
    $("#yourScore").html("Your Score : " + yourScore);
}

function updateWinsAndLosses() {
    const scoreDiff = targetScore - yourScore;

    if (scoreDiff === 0 || scoreDiff < 0) {
        if (scoreDiff === 0) {
            wins += 1;
            alert("You win!")
            $("#wins").html("Wins : " + wins);
        } else {
            losses += 1;
            alert("You lose!")
            $("#losses").html("Losses : " + losses);
        }

        resetGame();
    }
}

function updateGame(newScore) {
    updateYourScore(newScore);
    updateWinsAndLosses();
}



$(document).ready(function(){

   resetGame();

    $("#rulesBtn").on("click",function(){
        $("#rulesInfo").toggle();
    });


    $("#crystalOne").on("click", function(){
        updateGame(yourScore + crystalOneValue);
        
    });

    $("#crystalTwo").on("click", function(){
        updateGame(yourScore + crystalTwoValue);

    });

    $("#crystalThree").on("click", function(){
        updateGame(yourScore + crystalThreeValue);

    });

    $("#crystalFour").on("click", function(){
        updateGame(yourScore + crystalFourValue);

    });

});