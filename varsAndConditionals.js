// In this file, we'll be using variables, conditionals,
// and loops to model a soccer match.

let eaglesOff = 4;
let dragonOff = 5;

let eaglesDef = 6;
let dragonDef = 3;

let eaglesScore = 0;
let dragonScore = 0;

if (dragonOff > eaglesDef){
    console.log("the dragons have scored");
    dragonScore += 1
} else {
    console.log("The game continues")
}

/*Now the Eagles have the ball and are trying to score! Use an if/else to determine if the Dragons’ defense is enough to prevent them from scoring. If they do, console.log “The Eagles have scored.” and update the score. Otherwise, console.log “The game continues”.*/

if (eaglesOff > dragonDef){
    console.log("the eagles have scored");
    eaglesScore += 1
} else {
    console.log("the game continues")
}

/*After playing a long time, the players are tired. The coach for the Eagles team decides to swap out one of the offensive players for their best offensive player. This player will raise the offense ability of the team by 5. However, the offense ability cannot canont exceed 10. Using an if else statement, increase the Eagles’ offense ability to the correct value.*/

if (eaglesOff <= 5) {
    eaglesOff += 5;
} else {
    eaglesOff = 10;
}
console.log(eaglesOff)

let coinLandsHeads = false;
if (coinLandsHeads) {
    console.log("The drags coach calls timeout");
} else {
    console.log("let's keep playing")
}

/*
Let’s see how this game will play out if it continues. Create a for loop to model the Eagles scoring 5 times. Console.log the scores of the teams after each goal. */

for (let i = 0; i < 5; i++){
    if (eaglesOff > dragonDef){
        console.log("the eagles have scored");
        eaglesScore += 1;
        console.log(`The scores are Eagles ${eaglesScore} and Dragons ${dragonsScore}`)
    } else {
        console.log("the game continues")
    }
}

/* Demonstrate a while loop that will have the Dragons keep making goals until their score is 5. You will need to comment out the above for loops for these to run properly. */
    if (dragonOff > eaglesDef) {
        while (dragonScore < 5) {
        dragonScore ++;
    }
}
/* Add an if statement that will only let the Dragons make a goal if their offense ability is greater than the Eagles’ defense ability. */