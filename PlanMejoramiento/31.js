import fs from 'fs';

const Johan =
"Johan Sebastian Castro Gonzalez\n";

fs.appendFile('log.txt', Johan, (err) => {
if (err) {
console.error("Error:", err);
return;
}
console.log("Dato agregado (APPEND)");
});