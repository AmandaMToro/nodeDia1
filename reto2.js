
const fs = require("fs")


class Perfil
{
    constructor(name, surname, age)
    {
        this.name=name;
        this.surname=surname;
        this.age=age;
    }
}
    let perfil=new Perfil("Amanda", "Morillo", 27);
    
    fs.writeFile("perfil.json", JSON.stringify (perfil), (error)=>
    {

        if (error) throw error;
        console.log("perfil.json");
    
    
        fs.readFile("perfil.json", (error, perfil)=> {
        
            if (error) throw error;
            let perfil2 =JSON.parse(perfil);
            console.log(perfil2);
        }) 
            })

       
    fs.unlink(perfil.json, (error)=> {
        if (error) return error
            console.log("delete");
    })

    
    