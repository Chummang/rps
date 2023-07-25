let el = document.querySelector("button");
el.addEventListener("click", function() {
    let userChoice = prompt("What Do you want to choose, Rock, Paper or Scissors?").toLowerCase();
    let options=["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = options[randomNumber];
    alert("The Computer has picked" + " " + computerChoice);
    if (computerChoice == userChoice) {
        alert("It's a Tie, Try again!")
    } else if (computerChoice == "rock") {
        if(userChoice == "paper") {
            alert("The User Wins!")
        } else if (userChoice == "scissors"){
            alert("The Computer wins")
        }else{ 
            alert("You've entered gibberish")
        }
    } else if (computerChoice == "paper") {
        if(userChoice == "scissors") {
            alert("The User Wins!")
        } else if (userChoice == "rock"){
            alert("The Computer wins")
        }else{ 
            alert("You've entered gibberish")
        }
    } else if (computerChoice == "scissors") {
        if(userChoice == "rock") {
            alert("The User Wins!")
        } else if (userChoice == "paper"){
            alert("The Computer wins")
        }else{ 
            alert("You've entered gibberish")
        }
    }
})