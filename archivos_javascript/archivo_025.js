let url = "https://www.ejemplo.com/path/to/page";
console.log(url.slice(8, 20));
console.log(url.substring(8, 20)); 
console.log(url.slice(-4)); 

let dominio = url.slice(url.indexOf("://") + 3, url.indexOf("/", 8));
console.log(dominio);