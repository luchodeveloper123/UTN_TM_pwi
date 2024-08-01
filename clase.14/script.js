//a

/* const nombres = ['pepe', 'juan', 'ezequiel']

console.log(nombres) */



const nombres2 = ['yasmin', 'tatiana', 'viviana', 'luciano', 'juan']


let PosicionDeluciano = nombres2.indexOf('luciano')

console.log(PosicionDeluciano)

nombres2.splice(PosicionDeluciano, 1)

console.log(nombres2)

let PosicionDeJuan = nombres2.indexOf('juan')

console.log('la posicion de juan es ' + PosicionDeJuan)

//juan pasa a ser posicion 3 ya que el index of elimino a luciano

