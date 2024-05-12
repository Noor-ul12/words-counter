#! /usr/bin/env node
//import the inquirer module which is command line interface for node.js
import inquirer from "inquirer";
// Declare a costant" answer" and assingn it to the result of the 'inquirer.prompt' funtion
const answer = await inquirer.prompt([
    { name: "sentence",
        type: "input",
        message: "write your sentence to count the words"
    }
]);
const words = answer.sentence.trim().split(" ");
// print the array of words to the console
console.log(words);
// print the words count of the sentence
console.log(`your sentence words count is ${words.length}`);
