// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
const MESSAGES = require('./calculator_mesages.json');
const READLINE = require("readline-sync");
let language = "pt";

function chooseLanguage() {
  prompt("languageChoice");
  let choiceOfLanguage = READLINE.question();
  while (invalidLanguage(choiceOfLanguage)) {
    prompt("invalidLanguage");
    choiceOfLanguage = READLINE.question();
  }
  language = choiceOfLanguage;
}

function invalidLanguage(languageChoice) {
  return !languageChoice === "pt" || !languageChoice === "en";
}

function messages(message, lang = "en") {
  return MESSAGES[lang][message];
}

function prompt(key, variable = "") {
  let message = messages(key, language);
  console.log(`=> ${message} ${variable}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function chooseNumber() {
  let number = READLINE.question();

  while (invalidNumber(number)) {
    prompt("invalidNumber");
    number = READLINE.question();
  }
  return number;
}

function operationSwitch(operationChoice, firstNumber, secondNumber) {
  let result;
  switch (operationChoice) {
    case "1":
      //'1' represents addition
      result = Number(firstNumber) + Number(secondNumber);
      break;
    case "2":
      // '2' represents subtraction
      result = Number(firstNumber) - Number(secondNumber);
      break;
    case "3":
    // '3' represents multiplication
      result = Number(firstNumber) * Number(secondNumber);
      break;
    case "4":
      // '4' represents division
      result = Number(firstNumber) / Number(secondNumber);
      break;
  }
  return result;
}

//start program
prompt("welcome");
chooseLanguage();

function runCalculator() {
  prompt("firstNumber");
  let number1 = chooseNumber();

  prompt("secondNumber");
  let number2 = chooseNumber();

  prompt(
    "operationRequest"
  );

  let operation = READLINE.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt("invalidOperation");
    operation = READLINE.question();
  }

  let output = operationSwitch(operation, number1, number2);

  prompt("outputResult", output);
}

while (true) {
  runCalculator();
  prompt("newCalculation");
  let continueOperations = READLINE.question();

  if (["s", "y", "sim", "yes"].includes(continueOperations)) {
    console.clear();
    continue;
  } else {
    prompt("goodbye");
    break;
  }
}
