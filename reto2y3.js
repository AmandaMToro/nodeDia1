
const fs = require("fs")
const readline = require('readline');
// class Perfil
// {
//     constructor(name, surname, age)
//     {
//         this.name=name;
//         this.surname=surname;
//         this.age=age;
//     }
// }
//     let perfil=new Perfil("Amanda", "Morillo", 27);
    
//     fs.writeFile("perfil.json", JSON.stringify (perfil), (error)=>
//     {

//         if (error) return error;
//         console.log("perfil.json");
//     })
    
//     fs.readFile("perfil.json", (error, perfil)=> {
        
//         if (error) return error;
//         let perfil2 =JSON.parse(perfil);
//         console.log(perfil2);
//     })

       
    // fs.unlink(perfil.json, (error)=> {
    //     if (error) return error
    //         console.log("delete");
    // })

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
  let name="";
  let surname="";
  let age;
  
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
  
    