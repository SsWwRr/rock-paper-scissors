//Show the player their options
//Get input from the player 

//Create a function that randomizes the choice of pc
function getComputerChoice(){
    let random = Math.random()
    let one = 1
    let two = 2
    let three = 3
    if (random < 0.34){
        return one
    }
    else if(random >= 0.34 && random<0.67){
        return two

    }
    else if(random >=0.67){
        return three
    }
}
//Generate a random number between 1-3
//If number == 1 pick paper
//If number == 2 pick rock
//if number == 3 pick scissors
//Make elements strong/weak against each other
//Compare the element chosen by the computer and the element chosen by the player
//Output the winner
