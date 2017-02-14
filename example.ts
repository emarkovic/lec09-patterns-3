// tells us what a duck is
interface Duck {}

interface AFactory {
	createDuck(parameter):Duck;
}

class DuckFactory implements AFactory {
	createDuck(parameter):Duck {
		return Duck;
	}
}

// client class utilizes the factory
class Pond {
	//pond needs factory to make the ducks
	this.factory;	
	constructor() {
		this.factory = new DuckFactory();
	}

	needADuck() {
		this.facroty.createDuck();
	}
}

class FlyBehavior {
	constructor(duck) {
		this.duck = duck;
	}
	fly() {
		this.duck.getSpeed();
	}
}

let duck = new Duck()
duck.setBehavior(new FlyBehavior(duck))