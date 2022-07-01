const buttonColors = ["red", "blue", "green", "yellow"];
0;
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let index = 0;

const playSound = (color) => {
  const audio = new Audio(`./sounds/${color}.mp3`);
  audio.play();
};

const buttonClickAnim = (i) => {
  playSound(i);
  const flash = $(`#${i}`).addClass("pressed");
  setTimeout(() => flash.removeClass("pressed"), 300);
  console.log(`gamePattern: ${gamePattern}`);
};

const nextSequence = () => {
  level++;
  $("h1").text(`Level ${level}`);
  const random = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[random];
  gamePattern.push(randomChosenColor);
  for (let i = 0; i < gamePattern.length; i++) {
    setTimeout(() => buttonClickAnim(gamePattern[i]), (i + 1) * 500);
  }
};

const gameOver = () => {
  $("h1").text("Game Over! Press A Key to Start");

  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  index = 0;
  setTimeout(() => startGame(), 1000);
};

const checkAnswer = () => {
  if (gamePattern[index] !== userClickedPattern[index]) {
    gameOver();
    return;
  }

  if (gamePattern.length === userClickedPattern.length) {
    $("h1").text("Excellent! Keep going!");
    userClickedPattern = [];
    index = 0;
    setTimeout(() => nextSequence(), 1000);
    return;
  }

  index++;
};

const buttonClickHandler = () => {
  $(".btn").on("click", (e) => {
    buttonClickAnim(e.target.id);
    userClickedPattern.push(e.target.id);
    checkAnswer();
  });
};

const startGame = () => {
  $(document).on("keydown", (e) => {
    if (e.key === "a" && level === 0) {
      nextSequence();
      console.log(gamePattern);
    }
  });
};

startGame();
buttonClickHandler();
