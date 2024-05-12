"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);
const answers = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        types: "number",
        message: "Guess a number between 1 and 6"
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Great You guessed the right number!");
}
else {
    console.log("You guessed the wrong number!");
}
