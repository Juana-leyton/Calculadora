//alert("Hola desde aquí")

//console.log ("este es un mensaje que se muestra en la consola")

//document.write ("hola a todos desde DOM")

//prompt("tu edad")

/*function sumarNumeros(){
    let num1 = parseInt(prompt("Ingresa el primer número"))
    let num2 = parseInt(prompt("Ingresa el segundo número"))
    let suma = num1 + num2

    alert("la suma de los número es " + suma)

}
sumarNumeros()

function cambiarMensaje(idDiv){
    let mensaje = prompt('Escribe tu mensaje')
    document.getElementById(idDiv).innerHTML= mensaje
}*/

function pintarNumero(numero){
    //document.getElementById('data').value = numero
    pintarDatos(numero)
}

function pintarOperador(operador){
    //document.getElementById('data').value = operador
    pintarDatos(` ${operador} `)
}

function pintarDatos(dato){
    let valorInput = document.getElementById("data")
    //valorInput.value = valorInput.value + " " + dato
    valorInput.value = `${valorInput.value}${dato}`
}

function limpiarDato(){
    document.getElementById('data').value=null
}

function mostrarResultado(){
    let valorInput = document. getElementById('data').value
    let arreglo = valorInput.split(' ')

    /*if(arreglo[1] == '+'){
        let suma =parseInt(arreglo[0])+parseInt(arreglo[2])
        document.getElementById('data').value=suma
    } else if (arreglo[1] == '-') {
        let resta =parseInt(arreglo[0])-parseInt(arreglo[2])
        document.getElementById('data').value=resta
    } else if (arreglo[1] == '*'){
        let multiplicar =parseInt(arreglo[0])*parseInt(arreglo[2])
        document.getElementById('data').value=multiplicar
    } else (arreglo[1] == '/'){
        let dividir =parseInt(arreglo[0])/parseInt(arreglo[2])
        document.getElementById('data').value=dividir
    }    
}*/
   // Segunda opción para hacer la calculadora.

switch(arreglo[1]) {
    case '+':
        let suma =parseInt(arreglo[0])+parseInt(arreglo[2])
        document.getElementById('data').value=suma
        break;
    case '-':
        let resta =parseInt(arreglo[0])-parseInt(arreglo[2])
        document.getElementById('data').value=resta
        break;
    case '*':
        let multiplicar =parseInt(arreglo[0])*parseInt(arreglo[2])
        document.getElementById('data').value=multiplicar
        break;
    case '/':
        let dividir =parseInt(arreglo[0])/parseInt(arreglo[2])
        document.getElementById('data').value=dividir
        break;
}
}

function pintarDia(){
    let dia=prompt('Ingresa el día')

    switch(dia){
        case 'lunes':
        case '1':
           alert("Sabias que el día lunes, en latín significa lunae dies, lo que traducido al español es: día de la luna")
           break;
        case 'martes':
        case '2':
            alert("Sabias que el día martes, en latín significa martis dies, lo que traducido al español es: día de Marte.")
            break;
        case 'miércoles':
        case '3':
            alert("Sabias que el día miércoles, en latín significa mercuri dies, lo que traducido al español es: día de Mercurio")
            break;
        case 'jueves':
        case '4':
            alert("Sabias que el día jueves, en latín significa jovis dies, lo que traducido al español es: día de Júpiter")
            break;
        case 'viernes':
        case '5':
            alert("Sabias que el día viernes, en latín significa veneris dies, lo que traducido al español es: día de Venus")
            break;
        case 'sabado':
        case '6':
        alert("Sabias que el día sábado, en latín significa sabbath, lo que traducido al español es: descanso")
            break;
        case 'domingo':
        case '7':
            alert("Sabias que el día domingo, en latín significa dominicus dies, lo que traducido al español es: día del señor")
            break;
        default:
        alert("El dato ingresado no es un día de la semana")
    }
}
