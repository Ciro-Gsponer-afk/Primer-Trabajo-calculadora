const pantalla = document.getElementById("Pantalla")

const Nums = document.querySelectorAll(".Numero")

const suma = document.getElementById("Suma")
const resta = document.getElementById("Resta")
const division = document.getElementById("Division")
const multiplicacion = document.getElementById("Multiplicacion")
const respuesta = document.getElementById("Respuesta")

const resultado = document.getElementById("Resultado")
let Numero1 = ""
let Numero2 = ""
let Op = ""

Nums.forEach(num => {
    num.addEventListener("click", () => {

        if (Op === "") {
            Numero1 += num.textContent.trim()
            pantalla.textContent = Numero1
        } 
        else {
            Numero2 += num.textContent.trim()
            pantalla.textContent = Numero2
        }

    })
})

suma.addEventListener("click", () => {
    if (Numero1 !== "") Op = "+"
})

resta.addEventListener("click", () => {
    if (Numero1 !== "") Op = "-"
})

division.addEventListener("click", () => {
    if (Numero1 !== "") Op = "/"
})

multiplicacion.addEventListener("click", () => {
    if (Numero1 !== "") Op = "*"
})

respuesta.addEventListener("click", () => {

    if (Numero1 === "" || Numero2 === "") return

    let n1 = Number(Numero1)
    let n2 = Number(Numero2)

    let Resultado = 0

    if (Op === "+") Resultado = n1 + n2
    if (Op === "-") Resultado = n1 - n2
    if (Op === "/") Resultado = n1 / n2
    if (Op === "*") Resultado = n1 * n2

    console.log(Resultado);
    
    pantalla.textContent = Resultado

    Numero1 = Resultado.toString()
    Numero2 = ""
    Op = ""
})