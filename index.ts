import { GumballMachine } from './gumball';

//very simple UI handler!
import readline = require('readline');

let io = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout
});

const machine = new GumballMachine(5);
const prompt = '> ';

function execute(command){
  if(command.startsWith('insert')){
    machine.insertQuarter();
  }
  else if(command.startsWith('eject')){
    machine.ejectQuarter();
  }
  else if(command.startsWith('turn')){
    machine.turnCrank();
  }
  else if(command.startsWith('dispense') || command.startsWith('get')){
    machine.dispense();
  }
  io.question(prompt, execute);
}

console.log("Gumball-o-Matic v1.0");
io.question(prompt, execute); //start the game!