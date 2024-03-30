/*
    Fixed ocp voilation by creating flyable and non flyable bird classes
*/
abstract class BirdV2 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    breathe() { console.log("breathe"); }
    abstract makeSound(): void;
}

abstract class FlyableBird extends BirdV2 {
    abstract fly(): void;
}

abstract class NonFlyableBird extends BirdV2 {

}

abstract class SwimmableBird extends BirdV2 {
    abstract swim(): void;
}

export class CrowV2 extends FlyableBird {
    constructor(name: string) {
        super(name);
    }
    makeSound(): void {
        console.log("cow cow");
    }
    fly(): void {
        console.log("fly");
    }
}
export class PenguinV2 extends NonFlyableBird {
    constructor(name: string) {
        super(name);
    }
    makeSound(): void {
        console.log("pew pew");
    }
}



/*
    1. Creating duck not possible as multiple inheritence not allowed in ts
        // class Duck extends SwimmableBird, FlyableBird {

        // }
    2. Creating diffrent type of bird can lead to multiple diffrent type of extensions
        2 Behavoir = 2^2 = 4 diffrent abstract classed
*/

abstract class FlyAbleSwimmable {
    abstract fly(): void;
    abstract swim(): void;
}
abstract class NonFlyAbleSwimmable {
    abstract swim(): void;
}        
abstract class FlyAbleNonSwimmable {
    abstract fly(): void;
}        
abstract class NonFlyAbleNonSwimmable {
}

function testv2(bird) {
    console.time();
    bird.breathe();
    bird?.fly?.();
    bird.makeSound();
    console.timeEnd();
}
testv2(new CrowV2("Crow"));
testv2(new PenguinV2("penguin"));