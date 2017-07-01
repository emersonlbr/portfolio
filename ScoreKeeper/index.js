var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var reset = document.querySelector("#reset");
var numInput = document.querySelector("input[type='number']");
var winningScoreDisplay = document.querySelector("p spam");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      //this class in the css file
      p1Display.classList.add("winner");
      gameOver = true;
      // p1Display.style.color = "red";
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function(){
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
      // p2Display.style.color = "red";
    }
  p2Display.textContent = p2Score;
  }
});

reset.addEventListener("click", function(){
  resetGame();
});
//will run any time the value changes
numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  resetGame();
})

function resetGame(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  // class in css
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}

// reset.addEventListener("click", function()
// {
//   p2Score = 0;
//   p1Score = 0;
//   p1Display.textContent = "0";
//   p2Display.textContent = "0";
//   gameOver = false;
//   p1Display.style.color = "black";
//   p2Display.style.color = "black";
// })
