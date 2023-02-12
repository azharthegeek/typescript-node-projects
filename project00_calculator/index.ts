#! /usr/bin/env node

import inquirer from "inquirer";

async function main() {
    const answers: {
        NumberOne: number;
        NumberTwo: number;
        Operator: string;
    } = await inquirer.prompt([
        {
            type: "number",
            name: "NumberOne",
            message: "Enter a 1st number",
        },
        {
            type: "number",
            name: "NumberTwo",
            message: "Enter a 2nd number",
        },
        {
            type: "list",
            name: "Operator",
            choices: ["Add", "Subtract", "Multiply", "Divide"],
            message: "Select Operator"
        }
    ]);

    const { NumberOne, NumberTwo, Operator } = answers;
    switch (Operator) {
        case "Add":
            console.log("Result of ", Operator, " of ", NumberOne, " and ", NumberTwo, " is ", NumberOne + NumberTwo);
            break;
        case "Subtract":
            console.log("Result of ", Operator, " of ", NumberOne, " and ", NumberTwo, " is ", NumberOne - NumberTwo);
            break;
        case "Multiply":
            console.log("Result of ", Operator, " of ", NumberOne, " and ", NumberTwo, " is ", NumberOne * NumberTwo);
            break;
        case "Divide":
            console.log("Result of ", Operator, " of ", NumberOne, " and ", NumberTwo, " is ", NumberOne / NumberTwo);
            break;
        default:
            console.log("Invalid Input Please Try Again");
            break;
    }
}
main();



