const users = [
    {
        nombre: 'pepe',
        id: 1
    },
    {
        nombre: 'maria',
        id: 2
    },
    {
        nombre: 'juan',
        id: 4
    },
]

const find = (array, callback) =>{
    for(const element of array){
        if(callback(element)){
            return element
        }
    }
    return undefined
}

const usuarioBuscado = find(users, (user) => {
    return user.id == 1
} )

console.log(usuarioBuscado)

/* const agregarItemAlCarrito = (producto) => {
    const itembuscado = carrito.find((item) => item.id === producto.id)
    if(itembuscado){
        itembuscado.cantidad += 1
    } else {
        const nuevoItem = carrito.find((item) => item.id === id)
        if(nuevoItem){
            nuevoItem.cantidad = 1
            carrito.push(nuevoItem)
        } else {
            console.error('error ese id no existe')
        }
    }
    RenderizarCarrito(carrito)
    siempre que modifico mi carrito debo de renderizarlo 
}  */

const contadotHTML = document.getElementById('contador')
const btnIncrementarHTML = document.querySelector('.btn-incrementar')
const btnDecrementarHTML = document.querySelector('.btn-decrementar')

const renderizarContador = () =>{
    estadoContadorHTML.innerText = estadoContador
}
const incrementarContador = () =>{
    estadoContador = estadoContador + 1 
    renderizarContador()
}

const decrementarContador = () =>{
    if (estadoContador > 0){
        estadoContador = estadoContador - 1 
    }
    renderizarContador()
}


let estadoContador = 1
renderizarContador()

btnIncrementarHTML.addEventListener('click, incrementarContador')
btnDecrementarHTML.addEventListener('click, decrementarContador')


const formLoginHTML = document.getElementById('form-login')

console.dir(formLoginHTML.password.value)
console.dir(formLoginHTML.username.value)


const handleLogiN = (evento) =>{
    evento.preventDefault()
    console.log('formulario enviado')
}

formLoginHTML.addEventListener('submit', handleLogiN)









