const animal ={vivo: true};
const reptil = {tipo: "Réptil"};
const tartaruga = {nome: "Leonardo"};

Object.setPrototypeOf(reptil, animal);
Object.setPrototypeOf(tartaruga, reptil);

console.log(tartaruga.tipo);  
console.log(tartaruga.vivo); 