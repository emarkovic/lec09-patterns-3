"use strict";
var GumballMachine = (function () {
    function GumballMachine(count) {
        this.state = GumballMachine.SOLD_OUT;
        this.count = count;
        if (count > 0)
            this.state = GumballMachine.NO_QUARTER;
    }
    GumballMachine.prototype.insertQuarter = function () {
        if (this.state == GumballMachine.NO_QUARTER) {
            console.log("You inserted a quarter");
            this.state = GumballMachine.HAS_QUARTER;
        }
        else if (this.state == GumballMachine.HAS_QUARTER) {
            console.log("Can't insert another quarter");
        }
        else if (this.state == GumballMachine.SOLD) {
            console.log("Please wait while gumball is delivered");
        }
        else if (this.state == GumballMachine.SOLD_OUT) {
            console.log("The machine is sold out :( Keep your quarter");
        }
    };
    GumballMachine.prototype.ejectQuarter = function () {
        if (this.state == GumballMachine.NO_QUARTER) {
            console.log("You haven't inserted a quarter");
        }
        else if (this.state == GumballMachine.HAS_QUARTER) {
            console.log("Quarter refunded");
            this.state = GumballMachine.NO_QUARTER;
        }
        else if (this.state == GumballMachine.SOLD) {
            console.log("Gumball being delivered; no refunds");
        }
        else if (this.state == GumballMachine.SOLD_OUT) {
            console.log("The machine is sold out; no quarter to eject");
        }
    };
    GumballMachine.prototype.turnCrank = function () {
        if (this.state == GumballMachine.NO_QUARTER) {
            console.log("No gumball without a quarter!");
        }
        else if (this.state == GumballMachine.HAS_QUARTER) {
            console.log("Processing payment...");
            this.state = GumballMachine.SOLD;
            this.dispense();
        }
        else if (this.state == GumballMachine.SOLD) {
            console.log("Gumball is being delivered, you can stop turning");
        }
        else if (this.state == GumballMachine.SOLD_OUT) {
            console.log("No gumballs to deliver");
        }
    };
    GumballMachine.prototype.dispense = function () {
        if (this.state == GumballMachine.NO_QUARTER) {
            console.log("You need to pay first!");
        }
        else if (this.state == GumballMachine.HAS_QUARTER) {
            console.log("Turn the crank to get a gumball");
        }
        else if (this.state == GumballMachine.SOLD) {
            console.log("Here's your gumball!");
            this.count--;
            if (this.count > 0) {
                this.state = GumballMachine.NO_QUARTER;
            }
            else {
                console.log("♫ It's the final gumball ♫");
                this.state = GumballMachine.SOLD_OUT;
            }
        }
        else if (this.state == GumballMachine.SOLD_OUT) {
            console.log("No gumballs to dispense");
        }
    };
    return GumballMachine;
}());
GumballMachine.NO_QUARTER = 1;
GumballMachine.HAS_QUARTER = 2;
GumballMachine.SOLD = 3;
GumballMachine.SOLD_OUT = 4;
exports.GumballMachine = GumballMachine;
