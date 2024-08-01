


/* console.log(fetch('https://jsonplaceholder.typicode.com/users',{
    method: 'GET'
})) */




const SolicitarUsuarios = async () =>{
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'GET'
    })
    console.log(respuesta)
    const Resultado = await respuesta.json()
    console.log(Resultado)

}


SolicitarUsuarios()
