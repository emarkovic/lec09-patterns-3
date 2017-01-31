"use strict";
var gumball_1 = require("./gumball");
//very simple UI handler!
var readline = require("readline");
var io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var machine = new gumball_1.GumballMachine(5);
var prompt = '> ';
function execute(command) {
    if (command.startsWith('insert')) {
        machine.insertQuarter();
    }
    else if (command.startsWith('eject')) {
        machine.ejectQuarter();
    }
    else if (command.startsWith('turn')) {
        machine.turnCrank();
    }
    else if (command.startsWith('dispense') || command.startsWith('get')) {
        machine.dispense();
    }
    io.question(prompt, execute);
}
console.log("Gumball-o-Matic v1.0");
io.question(prompt, execute); //start the game!
