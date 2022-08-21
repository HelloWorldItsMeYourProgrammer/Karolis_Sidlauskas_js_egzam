/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator (a, b) {
    this.a = a;
    this.b = b;
    this.aritmetika = function () {
        alert("suma: " + (a+b) + " atimtis: " + (a-b) + " daugyba: " + (a*b) + " dalyba: " + (a/b));
    }
}

const myCalculator = new Calculator (3, 18);

myCalculator.aritmetika();