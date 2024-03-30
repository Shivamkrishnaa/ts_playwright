abstract class BirdV3 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    breathe(): void {
        console.log("Breathe");
    }
    abstract makeSound(): void;
}

interface FlyableBirdV3 {
    fly: () => void;
}

interface SwimmableBirdV3 {
    swim: () => void;
}
export class CrowV3 extends BirdV3 implements FlyableBirdV3 {
    makeSound(): void {
        console.log("cow cow");
    }
    fly: () => void;
}
export class PigeonV3 extends BirdV3 implements SwimmableBirdV3 {
    makeSound(): void {
        console.log("pew pew");
    }
    swim: () => void;
}

export class DuckV3 extends BirdV3 implements SwimmableBirdV3, FlyableBirdV3 {
    fly: () => void;
    swim: () => void;
    makeSound(): void {
        console.log("puck puck");
    }
}

function testv3(bird:any) {
    console.time();
    console.log(bird.name);
    bird.breathe();
    bird.makeSound();
    bird?.fly?.();
    bird?.swim?.();
    console.timeEnd();
}

testv3(new PigeonV3("penguin"));
testv3(new DuckV3("duck"));
testv3(new CrowV3("crow"));