// Variables
let dice1 = document.querySelector(".player1 div:last-child");
let dice2 = document.querySelector(".player2 div:last-child");
const diceBody1 = document.querySelector(".diceBody1");
const diceBody2 = document.querySelector(".diceBody2");
const p1Victory = document.querySelector(".p1Victory");
const p2Victory = document.querySelector(".p2Victory");

// To reset the game
function handleReset() {
	// remove all style by removing the css class that styled the component
	dice1.classList.remove("diceBodyWinner");
	dice2.classList.remove("diceBodyLooser");
	dice1.classList.remove("diceBodyLooser");
	dice2.classList.remove("diceBodyWinner");
	// remove the image from the background
	diceBody1.style.cssText = "background:#fff;";
	diceBody2.style.cssText = "background:#fff;";
	p1Victory.classList.add("hide");
	p2Victory.classList.add("hide");
}

// to Roll the dice
function handleRoll() {
	// random number from 1 to 6 to roll the left dice
	const rolling1 = Math.floor(Math.random() * 6 + 1);
	// the logic to add a svg background image with transparent background, just the balck dots
	if (rolling1 === 1) {
		diceBody1.style.cssText =
			"background-Image:url('./images/1.svg');background-position: center; background-repeat: no-repeat; background-size: cover;";
	} else if (rolling1 === 2) {
		diceBody1.style.cssText =
			"background-Image:url('./images/2.svg');background-position: center; background-repeat: no-repeat; background-size: cover;";
	} else if (rolling1 === 3) {
		diceBody1.style.cssText =
			"background-Image:url('./images/3.svg');background-position: center; background-repeat: no-repeat; background-size: cover;";
	} else if (rolling1 === 4) {
		diceBody1.style.cssText =
			"background-Image:url('./images/4.svg');background-position: center; background-repeat: no-repeat; background-size: cover;";
	} else if (rolling1 === 5) {
		diceBody1.style.cssText =
			"background-Image:url('./images/5.svg');background-position: center; background-repeat: no-repeat; background-size: cover;";
	} else if (rolling1 === 6) {
		diceBody1.style.cssText =
			"background-Image:url('./images/6.svg');background-position: center; background-repeat: no-repeat; background-size: cover;";
	}

	// random number from 1 to 6 to roll the right dice
	const rolling2 = Math.floor(Math.random() * 6 + 1);
	// the logic to add a svg background image with transparent background, just the balck dots
	if (rolling2 === 1) {
		diceBody2.style.cssText =
			"background-Image:url('./images/1.svg');background-position: center; background-repeat: no-repeat; background-size: cover;";
	} else if (rolling2 === 2) {
		diceBody2.style.cssText =
			"background-Image:url('./images/2.svg');background-position: center; background-repeat: no-repeat; background-size: cover;";
	} else if (rolling2 === 3) {
		diceBody2.style.cssText =
			"background-Image:url('./images/3.svg');background-position: center; background-repeat: no-repeat; background-size: cover;";
	} else if (rolling2 === 4) {
		diceBody2.style.cssText =
			"background-Image:url('./images/4.svg');background-position: center; background-repeat: no-repeat; background-size: cover;";
	} else if (rolling2 === 5) {
		diceBody2.style.cssText =
			"background-Image:url('./images/5.svg');background-position: center; background-repeat: no-repeat; background-size: cover;";
	} else if (rolling2 === 6) {
		diceBody2.style.cssText =
			"background-Image:url('./images/6.svg');background-position: center; background-repeat: no-repeat; background-size: cover;";
	}

	// This logic change the background as a feedback to show who won
	// In case of leftside side win
	if (rolling1 > rolling2) {
		p1Victory.classList.remove("hide");
		p2Victory.classList.add("hide");
		dice1.classList.add("diceBodyWinner");
		dice2.classList.add("diceBodyLooser");
		dice1.classList.remove("diceBodyLooser");
		dice2.classList.remove("diceBodyWinner");
		// In case of right side win
	} else if (rolling1 < rolling2) {
		p1Victory.classList.add("hide");
		p2Victory.classList.remove("hide");
		dice1.classList.add("diceBodyLooser");
		dice2.classList.add("diceBodyWinner");
		dice1.classList.remove("diceBodyWinner");
		dice2.classList.remove("diceBodyLooser");
		// In case of even result, white background
	} else if (rolling1 === rolling2) {
		p1Victory.classList.add("hide");
		p2Victory.classList.add("hide");
		dice1.classList.remove("diceBodyWinner");
		dice2.classList.remove("diceBodyLooser");
		dice1.classList.remove("diceBodyLooser");
		dice2.classList.remove("diceBodyWinner");
	}
}
