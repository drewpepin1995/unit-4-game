let wins = 0;
let losses = 0;
let crystalOneValue = 0;
let crystalTwoValue = 0;
let crystalThreeValue = 0;
let crystalFourValue = 0;
let yourScore = 0;





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
        $("#yourScore").html("Your score : " + crystalOneValue);
        
        

    });

    $("#crystalTwo").on("click", function(){
        $("#yourScore").html("Your score : " + crystalTwoValue);
        
        

    });

    $("#crystalThree").on("click", function(){
        $("#yourScore").html("Your score : " + crystalThreeValue);
        
        

    });

    $("#crystalFour").on("click", function(){
        $("#yourScore").html("Your score : " + crystalFourValue);
        
        

    });



    $("#wins").html("Wins : " + wins);
    $("#losses").html("Losses : " + losses);
    $("#targetScore").html("Target Score : " + targetScore);
    
    









});