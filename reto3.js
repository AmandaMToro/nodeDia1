
  
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
let name="";
let surname="";
let age="";

rl.question("Introduce tu nombre :", (answer1) => {
  name=answer1;

  rl.question("Introduce tu apellido:", (answer2) => {
  surname=answer2;

      rl.question("Introduce tu edad ", (answer3) => {
        age=answer3
  
  let perfil={name:answer1, surname:answer2, age:answer3}
  console.log("Gracias por meter tus datillos", (perfil) );
rl.close();   
})
    }) 
        });
