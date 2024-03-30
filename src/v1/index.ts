/*
    OCP voilation improvement:
    make bird class responsible for generic details not specifil implementation
*/
abstract class BirdV1 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    breathe() { console.log("Breathe"); }
    abstract fly(): void;
    abstract makeSound(): void;
}

class CrowV1 extends BirdV1 {
    constructor(name: string) {
        super(name);
    }
    fly(): void {
        console.log("Fly");
    }
    makeSound(): void {
        console.log("cow cow")
    }
}

class PenguinV1 extends BirdV1 {
    constructor(name: string) {
        super(name);
    }
    fly(): void {
        /* 
            penguins cant fly 
            1. keeping it empty no logic inside
            2. throw error
        */
       throw new Error("error");
       
    }
    makeSound(): void {
        console.log("pew pew");
    }
}


function testv1(bird: BirdV1) {
    bird.breathe();
    try {
        bird?.fly?.();
    } catch (error) {
        
    }
    bird.makeSound();
}

testv1(new CrowV1("crow"));
testv1(new PenguinV1("penguin"));