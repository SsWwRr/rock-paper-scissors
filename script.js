//Show the player their options
//Get input from the player 
//alert("Type rock to choose rock. Type paper to choose paper. Type scissors to choose scissors")
//prompt = prompt()
let playersChoice = ""
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let div = document.getElementById("div")
let winner = ""
let tie = ""
let loser = ""
let h1 = document.createElement("h1")
let p1 = document.createElement("p")
rock.addEventListener("click",() => playersChoice = "rock")
paper.addEventListener("click",() => playersChoice = "paper")
scissors.addEventListener("click",()=> playersChoice = "scissors")
rock.addEventListener("click",() => game())
paper.addEventListener("click",() => game())
scissors.addEventListener("click",()=> game())
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
         winner = `You won this round! ${player} beats ${computer}`
        //Output the winner
        let text = document.createTextNode(`${winner}`)
        p1.append(text)
        div.append(p1)
        return 1
    }
    //Compare the element chosen by the computer and the element chosen by the player
    else if (computer == "rock" && player == "rock" || computer == "paper" && player == "paper" || computer == "scissors" && player == "scissors")
    {
         tie = `No one wins this round! You both chose ${player}`
        //Output the winner
        console.log("1")
        let text = document.createTextNode(`${tie}`)
        p1.append(text)
        div.append(p1)
        return 0
    }
    else if(computer == "rock" && player == "scissors" || computer == "paper" && player == "rock" || computer == "scissors" && player == "paper")
    {  
         loser = `You lost this round! ${computer} beats ${player}`
        //Output the winner
        let text = document.createTextNode(`${loser}`)
        console.log("2")
        p1.append(text)
        div.append(p1)
        return 2
    }
    else if(player != "scissors" || player != "paper" || player != "rock"){
        console.log("3")
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
        let score = document.createTextNode("You won the game!")
        h1.append(score)
        div.append(h1)
        
        return "You won the game"
    }
    if (player1 < pc){
        let score = document.createTextNode("You lost the game!")
        h1.append(score)
        div.append(h1)
        return "You lost the game"
    }
    if(player1 == pc){
        let score = document.createTextNode("You tied.")
        h1.append(score)
        div.append(h1)
        return "You tied."
    }
    if(pc == -5){
        let score = document.createTextNode("You inserted a wrong value.")
        h1.append(score)
        div.append(h1)
        return "You inserted a wrong value."
    }
    
    console.log(player1)
    console.log(pc)
}


