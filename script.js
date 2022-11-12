//Show the player their options
//Get input from the player 
alert("Type rock to choose rock. Type paper to choose paper. Type scissors to choose scissors")
prompt = prompt()
playersChoice = prompt.toLowerCase()
let winner = ""
let tie = ""
let loser = ""
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
         winner = `You won! ${player} beats ${computer}`
        //Output the winner
        return 1
    }
    //Compare the element chosen by the computer and the element chosen by the player
    else if (computer == "rock" && player == "rock" || computer == "paper" && player == "paper" || computer == "scissors" && player == "scissors")
    {
         tie = `No one wins! You both chose ${player}`
        //Output the winner
        return 0
    }
    else if(computer == "rock" && player == "scissors" || computer == "paper" && player == "rock" || computer == "scissors" && player == "paper")
    {  
         loser = `You lost! ${computer} beats ${player}`
        //Output the winner
        return 2
    }
    else if(player != "scissors" || player != "paper" || player != "rock"){
        return 3
    }
}
function game(){
    //create a variable for computer's score
    let pc = 0
    //create a variable for player's score
    let player1 = 0
    //play the game five times
    for(let i = 0; i < 5;i++){
        console.log("iter")
        let round = play(getComputerChoice(),playersChoice)
        //if the player won add a point their score
        if (round == 1){
            player1++
            console.log(winner)
        } 
        else if(round == 0){
            //if there was a tie add one point to each score
            console.log(tie)
        }
        else if(round == 2){
            //if the computer won add a point to its score
            pc++
            console.log(loser)
        }
        else if(round == 3){
            pc = -5
        }

        
    }
    //announce the winner 
    if(player1 > pc && pc != -5){
        return "You won the game"
    }
    if (player1 < pc){
        return "You lost the game"
    }
    if(player1 == pc){
        return "You tied."
    }
    if(pc == -5){
        return "You inserted a wrong value."
    }
    
    console.log(player1)
    console.log(pc)
}


