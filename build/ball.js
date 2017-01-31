"use strict";
var Ball = (function () {
    function Ball() {
        this.diameter = 40;
        this.x = Math.floor(Math.random() * (Ball.RIGHT_BOUNDARY - Ball.LEFT_BOUNDARY)) + Ball.LEFT_BOUNDARY;
        this.y = Math.floor(Math.random() * (Ball.BOTTOM_BOUNDARY - Ball.TOP_BOUNDARY)) + Ball.TOP_BOUNDARY;
        this.dx = 3.5;
        this.dy = 3.5;
        this.color = "red";
    }
    /**
     * Moves the bal its speed
     */
    Ball.prototype.move = function () {
        this.x += this.dx;
        this.y += this.dy;
        //check if hit the left wall      
        if (this.x < Ball.LEFT_BOUNDARY) {
            this.x = Ball.LEFT_BOUNDARY;
            this.dx = -1 * this.dx;
        }
        else if (this.x + this.diameter > Ball.RIGHT_BOUNDARY) {
            this.x = Ball.RIGHT_BOUNDARY - this.diameter;
            this.dx = -1 * this.dx;
        }
        if (this.y < Ball.TOP_BOUNDARY) {
            this.y = Ball.TOP_BOUNDARY;
            this.dy = -1 * this.dy;
        }
        else if (this.y + this.diameter > Ball.BOTTOM_BOUNDARY) {
            this.y = Ball.BOTTOM_BOUNDARY - this.diameter;
            this.dy = -1 * this.dy;
        }
    };
    /**
     * Determines if two balls intersect
     * @param other The ball to check against
     * @returns if they intersect
     */
    Ball.prototype.isTouching = function (other) {
        //use pythogorean theorum to calculate distance
        var distance = Math.sqrt((this.x - other.x) * (this.x - other.x) + (this.y - other.y) * (this.y - other.y));
        return distance < (this.diameter / 2.0 + other.diameter / 2.0);
    };
    Ball.prototype.bounceOff = function (other) {
        this.dx = -1 * this.dx;
        this.dy = -1 * this.dy;
        var distance = Math.sqrt((this.x - other.x) * (this.x - other.x) + (this.y - other.y) * (this.y - other.y));
        var overlap = (this.diameter + other.diameter) / 2.0 - distance;
        if (overlap > 0) {
            console.log("Bounce ! " + overlap);
            this.x += Math.sign(this.dx) * (overlap * Math.sqrt(2) / 2);
            this.y += Math.sign(this.dy) * (overlap * Math.sqrt(2) / 2);
        }
    };
    return Ball;
}());
Ball.TOP_BOUNDARY = 50;
Ball.LEFT_BOUNDARY = 50;
Ball.BOTTOM_BOUNDARY = 350;
Ball.RIGHT_BOUNDARY = 350;
