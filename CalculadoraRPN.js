"use strict";
class PilaLIFO {
    constructor(nombre) {
        this.nombre = nombre;
        this.pila = Array();
        this.pantalla = ""

        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if (keyName === "+") {
                calculadora.suma();
            }
            if (keyName === "-") {
                calculadora.resta();
            }
            if (keyName === "/") {
                calculadora.division();
            }
            if (keyName === "*") {
                calculadora.multiplicacion();
            }
            if (keyName === ".") {
                calculadora.punto();
            }

            if (keyName === 'Enter') {
                calculadora.apilar();
            }

            if (keyName === 'Backspace') {
                calculadora.borrar();
            }

            if (keyName === 'Delete') {
                calculadora.desapilar();
            }

            if (!isNaN(Number(keyName))) {
                calculadora.numero(keyName);
            }

        });

    }

    borrar() {
        this.pantalla = ""
        this.operador = "";
        document.getElementById("pantalla").value = this.pantalla;
    }
    numero(numero) {
        if (this.pantalla === "0") {
            this.pantalla = "";
        }

        this.pantalla += numero.toString()
        document.getElementById("pantalla").value = this.pantalla;
    }
    punto() {
        this.pantalla += "."
        document.getElementById("pantalla").value = this.pantalla;
    }

    division() {
        if (this.pila.length >= 2) {
            var last = this.pila.pop();
            this.pila.push(this.pila.pop() / last);
            this.mostrar();
        }
    }

    suma() {
        if (this.pila.length >= 2) {
            this.pila.push(this.pila.pop() + this.pila.pop());
            this.mostrar();
        }

    }

    resta() {
        if (this.pila.length >= 2) {
            var last = this.pila.pop();
            this.pila.push(this.pila.pop() - last);
            this.mostrar();
        }
    }

    multiplicacion() {
        if (this.pila.length >= 2) {
            this.pila.push(this.pila.pop() * this.pila.pop());
            this.mostrar();
        }
    }

    expresiones(operator) {
        if (this.pila.length >= 1) {
            if (operator === "sin") {
                this.pila.push(Math.sin(this.pila.pop()));
            } else if (operator === "cos") {
                this.pila.push(Math.cos(this.pila.pop()));
            } else if (operator === "tan") {
                this.pila.push(Math.tan(this.pila.pop()));
            } else if (operator === "arcsin") {
                this.pila.push(Math.asin(this.pila.pop()));
            } else if (operator === "arccos") {
                this.pila.push(Math.acos(this.pila.pop()));
            } else if (operator === "arctan") {
                this.pila.push(Math.atan(this.pila.pop()));
            }
            this.mostrar();
        }


    }

    apilar() {
        if(this.pantalla.length!=0){
            let valor = Number(this.pantalla);

            this.pila.push(valor);
            this.mostrar();
            this.borrar();
        }
       
    }



    desapilar() {
        this.pila.pop();
        this.mostrar();

    }

    mostrar() {
        let stringPila = "";
        for (var i in this.pila) {
            stringPila += this.pila[i] + " ";
        }
        document.getElementById("pantallaPila").value = stringPila;
    }
}
let calculadora = new PilaLIFO();



