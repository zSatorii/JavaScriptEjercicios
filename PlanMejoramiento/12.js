let Johan = ["Cliente A", "Cliente B", "Cliente C"];
console.log("Cola inicial:", Johan);
let Castro = Johan.shift();
console.log("Cliente atendido:", Castro);
console.log("Cola después de shift:", Johan);
Johan.unshift("Cliente Prioritario");
console.log("Cola final:", Johan);