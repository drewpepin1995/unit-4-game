let wins = 0;
let losses = 0;
let crystalOneValue = 0;
let crystalTwoValue = 0;
let crystalThreeValue = 0;
let crystalFourValue = 0;
let yourScore = 0;
let targetScore = 0;

function resetGame() {
    yourScore = 0;
    targetScore = Math.floor((Math.random() * (100-12) + 12));
}



$(document).ready(function(){

    let targetScore = Math.floor((Math.random() * (100-12) + 12));
    let crystalOneValue = Math.floor((Math.random() * (12-1) + 1));
    let crystalTwoValue = Math.floor((Math.random() * (12-1) + 1));
    let crystalThreeValue = Math.floor((Math.random() * (12-1) + 1));
    let crystalFourValue = Math.floor((Math.random() * (12-1) + 1));

    $("#rulesBtn").on("click",function(){
        $("#rulesInfo").toggle();
    });


    $("#crystalOne").on("click", function(){
        let newValue = yourScore += crystalOneValue;
        $("#yourScore").html("Your score : " + newValue);
        
    });

    $("#crystalTwo").on("click", function(){
        let newValue = yourScore += crystalTwoValue;
        $("#yourScore").html("Your score : " + newValue);

    });

    $("#crystalThree").on("click", function(){
        let newValue = yourScore += crystalThreeValue;
        $("#yourScore").html("Your score : " + newValue);

    });

    $("#crystalFour").on("click", function(){
        let newValue = yourScore += crystalFourValue;
        $("#yourScore").html("Your score : " + newValue);

    });

        $("#wins").html("Wins : " + wins);
        $("#losses").html("Losses : " + losses);
        $("#targetScore").html("Target Score : " + targetScore);

});