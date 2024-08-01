const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra

const validacionemail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
}
const validacionpassword = (password) =>{
    return password && password.length >= 6 && tieneMayuscula(password)
}


const login = () => {
    const usuario = {
        email: null,
        password: null
    }
    

    let email = prompt('ingrese un email')
    while(!validacionemail(email)){
        email = prompt('error email invalido: ingrese nuevamente el email')
    }
    usuario.email = email

    let password = prompt('ingrese la password que tenga mas de 6 caracteres y una mayuscula')
    while(!validacionpassword(password)){
        password = prompt('Error password invalida, vuelva a ingresar una password de 6 caracteres y una mayuscula')
    }
    usuario.password = password

    alert('usuario ${usuario.email} registrado')

    return usuario

}



console.log(login())
