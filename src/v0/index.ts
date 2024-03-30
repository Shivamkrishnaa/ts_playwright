
/*
    Open closed principle voilation when adding new bird
*/
class Bird {
    name: string;
    constructor (name: string) {
        this.name = name;
    }
    breathe(){
        console.log("Breathe")
    };
    makeSound(){
        if(this.name === "crow") console.log("cow cow")
        if(this.name === "penguin") console.log("pew pew")
    }
    fly(){
        console.log("Fly");
    }
}

function test0(bird: Bird): void {
    bird.breathe();
    bird.fly();
    bird.makeSound();
}

test0(new Bird("crow"));
test0(new Bird("penguin"));