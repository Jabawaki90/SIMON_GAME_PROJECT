const buttonColours = ["red", "blue", "green", "yellow"];

const nextSequence = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomChosenColour];
  console.log(randomChosenColour);
  return randomChosenColour;
};

nextSequence();

// let level = [];
// let nextLevel = [];

// const buttonClickAnimation = (i) => {
//   $(`#${i}`).addClass("pressed");
//   const remove = () => $(`#${i}`).removeClass("pressed");
//   setTimeout(remove, 100);
// };

// const buttonAutoClickAnimation = (i) => {
//   i.removeClass("pressed");
// };

// const initialColor = (i) => {
//   const firstButtonColor = $(".btn")[i].id;
//   const style = $(`#${firstButtonColor}`).addClass("pressed");
//   setTimeout(() => buttonAutoClickAnimation(style), 300);
//   level.push(firstButtonColor);
//   console.log("initial color:" + level);
// };

// const startGame = (i) => {
//   if (i === "a" && level.length === 0) {
//     $("h1").text("game start");
//   } else {
//     return;
//   }
// };

// const gameOver = () => {
//   $("body").addClass("game-over");
// };

// const compare = () => {
//   let latest = [];
//   if (level.length != nextLevel.length) {
//     return false;
//   } else {
//     for (let i = 0; i < level.length; i++) {
//       if (level[i] != nextLevel[i]) {
//         gameOver();
//         return false;
//       } else {
//         return true;
//       }
//     }
//   }
// };

// const newLevel = () => {
//   const newPattern = $(".btn")[randomGenerator()].id;
//   level.push(newPattern);
// };

// const newLevelAnim = () => {
//   for (let i = 0; i < level.length; i++) {
//     const anim = $(`#${level[i]}`).addClass("pressed");
//     setTimeout(() => anim.removeClass("pressed"), 500);
//   }
// };

// // const compare = () => {
// //   let latest = [];
// //   if (level.length === nextLevel.length) {
// //     for (let index = 0; index < nextLevel.length; index++) {
// //       if (level[index] === nextLevel[index]) {
// //         latest.push(nextLevel[index]);
// //       } else {
// //         console.log("game over");
// //         console.log("restart game");
// //       }
// //     }
// //     level = latest;
// //     console.log("latest array: " + level);
// //     console.log("correct!");
// //   } else {
// //     return;
// //   }
// // };

// // const addNewLevel = (i) => {
// //   if (level.length === nextLevel.length) {
// //     const newColor = $(".btn")[randomGenerator()].id;
// //     console.log("new color: " + newColor);
// //     level.push(newColor);
// //   } else {
// //   }
// //   console.log("level: " + level);
// //   console.log("Next level: " + nextLevel);
// // };

// // const nextAnimation = () => {
// //   for (let index = 0; index < level.length; index++) {
// //     const style = $(`#${level[index]}`).addClass("pressed");
// //     setTimeout(() => buttonAutoClickAnimation(style), 300);
// //   }
// // };

// const levelingUp = (input) => {
//   switch (input) {
//     case "green":
//       buttonClickAnimation(input);
//       nextLevel.push(input);

//       break;
//     case "red":
//       buttonClickAnimation(input);
//       nextLevel.push(input);

//       break;
//     case "yellow":
//       buttonClickAnimation(input);
//       nextLevel.push(input);

//       break;
//     case "blue":
//       buttonClickAnimation(input);
//       nextLevel.push(input);

//       break;
//     default:
//       break;
//   }
//   console.log("level:" + level);
//   console.log("next level:" + nextLevel);
// };

// $(document).on("keydown", (e) => {
//   startGame(e.key);
//   initialColor(randomGenerator());
// });
// $(".btn").on("click", (e) => {
//   levelingUp(e.target.id);
//   const result = compare();
//   if (result === true) {
//     newLevel();
//     newLevelAnim();
//     console.log(result);
//   }
// });
