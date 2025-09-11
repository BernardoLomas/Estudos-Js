const cachorro = {
    tipo: "Cachorro",
    latir: function() {
        console.log(this.tipo + " sabe latir.");
    }
}

const lobo = {tipo: "Lobo"};
Object.setPrototypeOf(lobo, cachorro);

cachorro.latir();
lobo.latir();

