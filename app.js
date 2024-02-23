let boxes = document.querySelectorAll(".box");
let button = document.querySelector("#reset-btn");
let newGamebt = document.querySelector("#new-btn");
let msgContain = document.querySelector(".msg-container");
let msgwinner = document.querySelector("#msg");

let turno = true;

const winner = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turno = true;
    enableBoxes();
    msgContain.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "o";
            turno = false;
        } else {
            box.innerText = "x";
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disabledBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerHTML = "";
    }
  };
  

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContain.classList.remove("hide");
    disabledBoxes();
}   

const checkwinner = () => {
    for (let pattern of winner) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

newGamebt.addEventListener("click", resetGame);
button.addEventListener("click", resetGame);