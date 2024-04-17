#! /usr/bin/env node

import inquirer from "inquirer";

const answer: {
  Sentence: string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: "Please enter your sentence to count words....",
  },
]);

const words = answer.Sentence.trim().split(" ");

console.log(words);

console.log(`Your word count is ${words.length}`);
