/***
 * Method Strategies
 ***/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CanFlyBehavior = (function () {
    function CanFlyBehavior() {
    }
    CanFlyBehavior.prototype.fly = function () { console.log("The duck flies through the air"); };
    return CanFlyBehavior;
}());
var NoFlyBehavior = (function () {
    function NoFlyBehavior() {
    }
    NoFlyBehavior.prototype.fly = function () { };
    return NoFlyBehavior;
}());
var Quack = (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () { console.log("Quack quack quack!"); };
    return Quack;
}());
var Squeek = (function () {
    function Squeek() {
    }
    Squeek.prototype.quack = function () { console.log("Squeek!"); };
    return Squeek;
}());
var SilentQuack = (function () {
    function SilentQuack() {
    }
    SilentQuack.prototype.quack = function () { };
    ;
    return SilentQuack;
}());
/**
 * A class that represents an abstract Duck.
 */
var Duck = (function () {
    function Duck() {
        //defaut can fly and quack
        this.flyBehavior = new CanFlyBehavior();
        this.quackBehavior = new Quack();
    }
    Duck.prototype.quack = function () {
        this.quackBehavior.quack();
    };
    Duck.prototype.fly = function () {
        this.flyBehavior.fly();
    };
    return Duck;
}());
exports.Duck = Duck;
var RedheadDuck = (function (_super) {
    __extends(RedheadDuck, _super);
    function RedheadDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RedheadDuck.prototype.display = function () {
        return "Looks like a RedHead";
    };
    return RedheadDuck;
}(Duck));
exports.RedheadDuck = RedheadDuck;
var MallardDuck = (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MallardDuck.prototype.display = function () {
        return "Looks like a Mallard";
    };
    return MallardDuck;
}(Duck));
exports.MallardDuck = MallardDuck;
var TealDuck = (function (_super) {
    __extends(TealDuck, _super);
    function TealDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealDuck.prototype.display = function () {
        return "Looks like a Teal";
    };
    return TealDuck;
}(Duck));
exports.TealDuck = TealDuck;
var RubberDuck = (function (_super) {
    __extends(RubberDuck, _super);
    function RubberDuck() {
        var _this = _super.call(this) || this;
        _this.flyBehavior = new NoFlyBehavior();
        _this.quackBehavior = new Squeek();
        return _this;
    }
    RubberDuck.prototype.display = function () {
        return "A rubber ducky!";
    };
    return RubberDuck;
}(Duck));
exports.RubberDuck = RubberDuck;
var DecoyDuck = (function (_super) {
    __extends(DecoyDuck, _super);
    function DecoyDuck() {
        var _this = _super.call(this) || this;
        _this.flyBehavior = new NoFlyBehavior();
        _this.quackBehavior = new SilentQuack();
        return _this;
    }
    DecoyDuck.prototype.display = function () {
        return "Looks like a duck, but isn't";
    };
    return DecoyDuck;
}(Duck));
exports.DecoyDuck = DecoyDuck;
