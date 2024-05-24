const ValorCadena = "instituto Alfa Carabobo"
const ValorNumerico = 2024
const ValorBooleano = true
const ValorIndefinido = undefined
const ValorNulo = null


const Valorista = [
    "oscar",
    "genesis",
    "manuel",
    "alexandra"
]

const Usuario = {
    name: "oscar",
    age: 36,
    email: "oscar@gmail.com",
    password: "contraseña01",
    addres: {
        country: "usa",
        state: "texas",

    }
}

if(Usuario.age >= 18)  {
        console.log ("es mayor de edad") 


} 
else {
    console.log(

    )

}


const myFuncion = (num1, num2) => {

const suma = num1 + num2


    return suma
}

const ValidateNumber = (num)=> {

if(num % 2 ==0 ) {
    return "part"

} else {
    return "impar"
}

    
}



console.log( ValidateNumber(8) )

axios.get("https://leonardoapi.onrender.com/songs")
.then((res) => {
    res.data.songs.map( (song) => {
document.write(song.author)
    } )

} ) 