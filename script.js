//Show the player their options
//Get input from the player 
playersChoice = "rock"
//Create a function that randomizes the choice of pc
function getComputerChoice(){
    //Generate a random number between 1-3
    let random = Math.random()
    //If number == 1 pick paper
    let one = "paper"
    //If number == 2 pick rock
    let two = "rock"
    //if number == 3 pick scissors
    let three = "scissors"
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
function play(computer,player){
    //Compare the element chosen by the computer and the element chosen by the player    
    if (computer == "rock" && player == "paper" || computer == "paper" && player == "scissors" || computer == "scissors" && player == "rock")
    {

        //Output the winner
        return `You won! ${player} beats ${computer}`
    }
    //Compare the element chosen by the computer and the element chosen by the player
    else if (computer == "rock" && player == "rock" || computer == "paper" && player == "paper" || computer == "scissors" && player == "scissors")
    {

        //Output the winner
        return `No one wins! You both chose ${player}`
    }
    else
    {

        //Output the winner
        return `You lost! ${computer} beats ${player}`
    }
}


