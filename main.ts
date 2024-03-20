#! /usr/bin/env node


import chalk from "chalk";
import inquirer from "inquirer";

// we use inquirer and prompt when we have to take input from users in "CLI" or to make terminal or console dynamic
const answer = await inquirer.prompt([
  {
    message: chalk.yellow.bold.italic("Enter 1st number:"),
    type: "number",
    name: "firstNumber",
  },
  {
    message:chalk.yellow.bold.italic( "Enter 2nd number:"),
    type: "number",
    name: "secondNumber",
  },
  {
    message: chalk.red.bold.italic("Please select the operation from the following"),
    type: "list",
    name: "operator",
    choices: [
     chalk.yellow.bold("Addition"),
      chalk.yellow.bold("Subtraction"),
      chalk.yellow.bold("Multiplication"),
      chalk.yellow.bold("Division"),
      chalk.yellow.bold("Modulus"),
      chalk.yellow.bold("Exponentiation"),
    ],
  },
]);

if (answer.operator === chalk.yellow.bold("Addition")) {
  console.log(chalk.green.bold(`Answer = ${answer.firstNumber + answer.secondNumber}`));
} else if (answer.operator === chalk.yellow.bold( "Subtraction")) {
  console.log(chalk.green.bold(`Answer = ${answer.firstNumber - answer.secondNumber}`));
} else if (answer.operator === chalk.yellow.bold("Multiplication")) {
  console.log(chalk.green.bold(`Answer = ${answer.firstNumber * answer.secondNumber}`));
} else if (answer.operator === chalk.yellow.bold("Division")) {
  console.log(chalk.green.bold(`Answer = ${answer.firstNumber / answer.secondNumber}`));
} else if (answer.operator === chalk.yellow.bold("Modulus")) {
  console.log(chalk.green.bold(`Answer = ${answer.firstNumber % answer.secondNumber}`));
} else if (answer.operator === chalk.yellow.bold("Exponentiation")) {
  console.log(chalk.green.bold(`Answer = ${answer.firstNumber ** answer.secondNumber}`));
} else {
  console.log(chalk.red("Error:Please enter a valid number."));
}
