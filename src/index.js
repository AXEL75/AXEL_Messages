//Como voy a crear el random de mensajes, como voy a añadir la configuración dentro del package y como lo voy a publicar
const messages = [
    "David",
    "Diana",
    "Ana Maria",
    "Isabela",
    "Carolina",
    "Yeny",
    "Aracely",
    "Pedro",
    "Antonio",
    "Norma"
]

//Funcion para hacer el random
const randomSMS = ()=>{
    //Math.floor -> Regresa el primer valor redondeado
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
}

//Exportarlo como módulo
module.exports ={ randomSMS};