var numSquares = 6,
    colors = [],
    pickedColor,
    squares = document.querySelectorAll(".square"),
    colorDisplay = document.querySelector("#colorDisplay"),
    messageDisplay = document.querySelector("#message"),
    h1 = document.querySelector("h1"),
    resetButton = document.querySelector("#reset"),
    modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new randon color from array
    pickedColor = pickColor();
    //change colorDisplay to match the picked color:
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares:
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function () {
    reset();
});


function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get color and push into array
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
    //pick a "red" from 0-255, then g "green" and b "blue"
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    // "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
};



