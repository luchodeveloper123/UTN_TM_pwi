//localstorage
//LocalStorage.setItem(key, value)      guarda un item
//LocalStorage.getItem(key)             obtener un item
//LocalStorage.removeItem(key)          elimina un item
//LocalStogare.clear()                  elimina todo
/* LocalStorage.setItem('username', Nombre) */


//JSON significa JavaScript object notation

//parse permite transformar un string con notacion de objetos a un objeto
/* console.log(JSON.parse('{"nombre": "pepe"}')) */

//string escrito en formato JSON
//('{"nombre": "pepe"}')

//stringify permite transformar un objeto a un string
/* const producto = {
    nombre: 'tv samsung',
    precio: 18.000
}
 */
//let StringConNotacionDeObjetos = JSON.stringify(producto)

//console.log(StringConNotacionDeObjetos) 


if(localStorage.getItem('historial') === null){
    localStorage.setItem('historial', JSON.stringify([]))
}

const ObtenerHistorial = () => JSON.parse(localStorage.getItem('historial'))
const GuardarHistorial = (objeto) =>{
    const historial = ObtenerHistorial()
    historial.push(objeto)
    localStorage.setItem('historial', JSON.stringify(historial))
}





