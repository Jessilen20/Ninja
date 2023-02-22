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
        console.log("Nombre: " + this.name, "Fuerza: " + this.fuerza, "velocidad: " + this.velocidad, "Salud del Ninja: " + this.salud );
    }
    drinkSake() {
        this.salud += 10;
    }
}

//Clase Sensei
class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.salud=200;
        this.velocidad=10;
        this.fuerza =10;

        this.sabiduria = 10;
    }
    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
        this.drinkSake();
    }
}

//Prueba para ninja
const ninja1 = new Ninja("Hyabusa");
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();

//Prueba sensei
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
