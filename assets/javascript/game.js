

$(document).ready(function () {

    //variable to store win counter

    var winCounter = 0;

    //variable to store loss counter

    var lossCounter = 0;

    //variable to store random computer chosen number

    var randomNumber = [];

    //variable to store computer chosen crystal1 value 

    var firstCrystal = "";

    //variable to store computer chosen crystal2 value 

    var secondCrystal = "";

    //variable to store computer chosen crystal3 value 

    var thirdCrystal = "";

    //variable to store computer chosen crystal4 value 

    var fourthCrystal = "";

    //variable to store total points 

    var total = 0;

    var totalScore = "";




    //computer randomly chooses number 



    randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
    //assign computer random chosen number to random computer chosen number variable 
    $("#random").text(randomNumber); 
    // compare html instead of js?
    //computer randomly chooses crystal 1 value
    firstCrystal = Math.floor(Math.random() * 10);
    console.log(firstCrystal);
    //assign random crystal 1 value to crystal 1 value variable

    //computer randomly chooses crystal 2 value
    secondCrystal = Math.floor(Math.random() * 10);
    console.log(secondCrystal);
    //assign random crystal 2 value to crystal 2 value variable

    //computer randomly chooses crystal 3 value
    thirdCrystal = Math.floor(Math.random() * 10);
    console.log(thirdCrystal);
    //assign random crystal 3 value to crystal 3 value variable

    //computer randomly chooses crystal 4 value
    fourthCrystal = Math.floor(Math.random() * 10);
    console.log(fourthCrystal);
    //assign random crystal 4 value to crystal 4 value variable


   

    //user clicks crystal 1

    $("#crystal-one").on("click", function () {
        // total += $(this).attr(firstCrystal); 

        //add crystal 1 value to total points
        total = total + firstCrystal;
        console.log(total);

        //print total to page

        $("#total").text(total);

    });
    //user clicks crystal 2

    $("#crystal-two").on("click", function () {
        // total += $(this).attr(firstCrystal); 

        //add crystal 2 value to total points

        total = total + secondCrystal;
        console.log(total);


        //user clicks crystal 3
        //print total to page 
        $("#total").text(total);


    });


    $("#crystal-three").on("click", function () {

        //add crystal 3 value to total points

        total = total + thirdCrystal;
        console.log(total);

        //print total points to page
        $("#total").text(total);
    });
    //user clicks crystal 4

    $("#crystal-four").on("click", function () {

        //add crystal 4 value to total points

        total = total + fourthCrystal;
        console.log(total);

        //print total points to page
        $("#total").text(total);

    });

   


    function winner() {
        alert("You win");
        winCounter++;
        $("#wins").text("Wins: " + winCounter);

    }

    function loser() {

        alert("You lost");
        lossCounter++;
        $("#losses").text("Losses: " + lossCounter);
    }
        if (total === randomNumber) {
            winner()
    }

    if (total > randomNumber) {
        loser()
    }

   

    $("#reset").on("click", function () {

        total = 0;
        $("#total").text(total);
        randomNumber = Math.floor(Math.random() * 10);
        $("#random").text(randomNumber); 
        console.log(randomNumber);
        firstCrystal = Math.floor(Math.random() * 10);
        console.log(firstCrystal);
        secondCrystal = Math.floor(Math.random() * 10);
        console.log(secondCrystal);
        thirdCrystal = Math.floor(Math.random() * 10);
        console.log(thirdCrystal);
        fourthCrystal = Math.floor(Math.random() * 10);
        console.log(fourthCrystal);

    });
    //compare total points to computer random chosen number

    //  if (total === randomNumber) {
    //     winner()
     

    //  }
    // if (total > randomNumber) {
    //     loser()

    //  }


    
    //if total points equals random number

    //alert win
    //add 1 to win counter

    //if total points is greater than random number

    //alert loss
    //add 1 to loss counter


    //reset game
















});



