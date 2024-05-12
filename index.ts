import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6+1);
console.log(randomNumber);

const answers = await inquirer.prompt([
{
    name: "userGuessedNumber",
    types: "number",
    message: "Guess a number between 1 and 6"
}
])

if (answers.userGuessedNumber === randomNumber){
    console.log("Great You guessed the right number!")
} else {
    console.log("You guessed the wrong number!")
}