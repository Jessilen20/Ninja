//Clase Ninja
class Ninja {
    constructor(nombre) {
        this.name = nombre;
        this.salud = 100;
        this.velocidad = 3;
        this.fuerza = 3;

    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log("Nombre del ninja: " + this.name);
        console.log("Fuerza: " + this.fuerza);
        console.log("velocidad: " + this.velocidad);
        console.log("Salud del Ninja: " + this.salud);
    }
    drinkSake() {
        this.salud += 10;
    }
}



const ninja1 = new Ninja("Hyabusa");
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();


