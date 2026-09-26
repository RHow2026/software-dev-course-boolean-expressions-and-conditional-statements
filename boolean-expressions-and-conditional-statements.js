/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village."); 
choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains") {
  console.log("As you start toward the mountains you notice how much darker the path becomes..."); 
  choice = readline.question("Do you have a torch and something to light it with? "); 
  if (choice === "yes" && hasTorch) {
    console.log("You safely navigate the dark path and reach the mountains.");
  } else if (choice === "no") {
    console.log("It's too dark to proceed. You decide to turn back.");
  }
} else if (choice === "village") {
  console.log("You find your way to the village.");
  choice = readline.question("Do you have a map to navigate the village? ");
  if (choice === "yes" || hasMap) {
    console.log("You use the map to find your way through the village and discover a hidden treasure!");
  } else if (choice === "no") {
    console.log("Without a map, you get lost in the village and have to ask for directions.");
  }
}


/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/