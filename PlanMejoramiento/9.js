function SumarCastro(arr) {
let Gonzalez = 0;
for (let i = 0; i < arr.length; i++) {
Gonzalez += arr[i];
}
return Gonzalez;
}

let Sebastian = [100, 200, 300, 400, 500];
console.log("Total:", SumarCastro(Sebastian));
