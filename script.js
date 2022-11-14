//random color created by the computer
//from array
//click element 
//square background color changed
//if user selection matches computer color square deleted

let colors = ["blue","red","green","yellow","purple","pink"];
let computerSelected;
let colorOption = document.querySelector('.color');

let squares = document.querySelectorAll('.square');

squares.forEach(addColor =>{
    addColor.style.backgroundColor = computerSelection();

    if(addColor.style.backgroundColor != computerSelected){
        computerSelection();
    }
})

squares.forEach(selected => {
    selected.addEventListener('click', userSelection);
})



function computerSelection(){
    computerSelected = colors[Math.floor(Math.random()*colors.length)];

    return computerSelected;
}

function userSelection(){

    if(this.style.backgroundColor == computerSelected){
        console.log("Good");

        this.style.backgroundColor = "white";
        computerSelection();
    }
//     console.log("Yes!");
// this.style.backgroundColor="white";
    // if(this.backgroundColor === computerSelected){
    //     console.log("same!");
    // }
}

computerSelection();

console.log(computerSelected);
colorOption.innerHTML = computerSelected;