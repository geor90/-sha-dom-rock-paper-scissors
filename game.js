const choices = [ "rock", "paper","scissors"];
let playerSelection, computerPlay;
let playerScore = 0;
let computerScore= 0;




const info = document.querySelector('#info');

function play(choice){
    
    computerPlay=Math.floor(Math.random()*3)
    info.innerText= `player choose : ${choices[choice]}, computer choice is : ${choices[computerPlay]}`;
    if (choice===computerPlay) return;
    if (choice-computerPlay== -2 || choice - computerPlay == 1 ){
        playerScore++
        document.querySelector("#playerScore").innerText = playerScore;
        if (playerScore === 5) return "win";
         
    } else {
        computerScore++;
        document.querySelector("#computerScore").innerText= computerScore;
        if (computerScore===5) return "lose";
    }
    };

 
    
    

document.querySelector('#rock').addEventListener('click',()=>{
    choice=0
    play(choice)
    console.log(choice)
    



});
document.querySelector('#paper').addEventListener('click',()=>{

    choice=1
    play(choice)
    console.log(choice)
});

document.querySelector('#scissors').addEventListener('click',()=>{

    choice=2
    play(choice)

    console.log(choice)

});





