//DOM= document object model o modelo objeto del documento
// el document object model es un objeto que se crea cada vez que yo abro la pagina web en mi archivo script
//console.dir el dir me va a mostrar de manera mucho mas detallada el objeto con el cual estas trabajando
console.dir(document)
//console.log(document)

//getElementById obtiene un elemento por Id si no lo encuentra retorna un null
const titulo = document.getElementById('titulo')
console.dir(titulo.innerText)
//se conecta solamente con el archivo que tiene la etiqueta script con el html, no puede tomar informacion de otros html sin estar conectado
//console.error('hola que tal') muestra un error

let nombre = prompt ('ingresa tu nombre')
titulo.innerText = 'hola ' + nombre


const cajaProducto = document.getElementById('caja-producto')
console.dir(cajaProducto)

cajaProducto.innerHTML = `
<h2>Soy un subtitulo</h2>
<p>TV muy linda</p>
`


//innerHTML es una herramienta que permite integrar cosas al script que estas trabajando en javascript

const usuario = {
    nombre: 'luciano',
    apellido: 'obit',
    direccion: 'calle siempre viva 782',
    edad: 18
}
const productos = [
    {
        nombre: 'tv samsung',
        precio: 500,
        id: 1,
        descripcion: 'Con Samsung Disfrutá Imágenes Con Una Claridad y Detalles Que Jamás Viste. ¡Elegí El Tuyo! ¡Las Imágenes Planas Cobran Vida Gracias a los Modelos de TV de Samsung! Conseguí el Tuyo. Canjeá tu TV Ahora. Plan Canje Samsung.',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPxk2o7hM84DdSAx-Aw3mZSScOKKjkm3fWg&s'
    },
    {
        nombre: 'tv samsung 42"',
        precio: 2500,
        id: 2,
        descripcion: 'Con Samsung Disfrutá Imágenes Con Una Claridad y Detalles Que Jamás Viste. ¡Elegí El Tuyo! ¡Las Imágenes Planas Cobran Vida Gracias a los Modelos de TV de Samsung! Conseguí el Tuyo. Canjeá tu TV Ahora. Plan Canje Samsung.',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPxk2o7hM84DdSAx-Aw3mZSScOKKjkm3fWg&s',
    },
    {
        nombre: 'tv samsung 32"',
        precio: 4500,
        id: 3,
        descripcion: 'Con Samsung Disfrutá Imágenes Con Una Claridad y Detalles Que Jamás Viste. ¡Elegí El Tuyo! ¡Las Imágenes Planas Cobran Vida Gracias a los Modelos de TV de Samsung! Conseguí el Tuyo. Canjeá tu TV Ahora. Plan Canje Samsung.',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPxk2o7hM84DdSAx-Aw3mZSScOKKjkm3fWg&s',
    }
]
const productosHTML = document.getElementById('productos')

let plantillaProductos = ''
for(const producto of productos ){
    plantillaProductos = plantillaProductos + `
    <div>
    <h3>${producto.nombre}<h3>
    <img width='200px' src="${producto.thumbnail}"/>
    <span>Precio: ${producto.precio}</span>
    <p>${producto.descripcion}</p>
    <button>Comprar</button>
    <div>
    <hr>
    `
}

productosHTML.innerHTML = plantillaProductos












