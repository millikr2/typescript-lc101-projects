import { Cargo } from "./Cargo"
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";

export class Rocket {
name:string;
totalCapacityKg:number;
cargoItems:Cargo[] = [];
astronauts:Astronaut[] = [];

constructor(name:string, totalCapacityKg:number){
    this.name = name;
    this.totalCapacityKg = totalCapacityKg
}

    sumMass(items:Payload[]):number{
        let mass:number = 0
        for(let i = 0; i < items.length; i++){
            mass += items[i].massKg
        }
        return mass
    }

    currentMassKg():number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts)
    }

    canAdd(item:Payload): boolean{
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }

    addCargo(cargo: Cargo): boolean{
        if(!this.canAdd(cargo)){
            return false
        } else{

            this.cargoItems.push(cargo)
            return true
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
                if(!this.canAdd(astronaut)){
            return false
        } else{

            this.astronauts.push(astronaut)
            return true
        }
    }

}