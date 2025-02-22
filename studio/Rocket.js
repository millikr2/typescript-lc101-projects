"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var mass = 0;
        for (var i = 0; i < items.length; i++) {
            mass += items[i].massKg;
        }
        return mass;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (!this.canAdd(cargo)) {
            return false;
        }
        else {
            this.cargoItems.push(cargo);
            return true;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (!this.canAdd(astronaut)) {
            return false;
        }
        else {
            this.astronauts.push(astronaut);
            return true;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
