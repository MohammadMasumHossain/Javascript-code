class toyotaCar {
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
}

//Creating object of toyotacar class

let fortuner = new toyotaCar();
let lexus= new toyotaCar();
console.log(toyotaCar);
console.log(fortuner)
console.log(fortuner.start());
console.log(lexus.stop());

