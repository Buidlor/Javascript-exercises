/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    // let one = document.getElementById('op-one').value
    // let two = document.getElementById('op-two').value
    

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
         var one = document.getElementById('op-one').value
         var two = document.getElementById('op-two').value
        alert(`the result is ${parseInt(one)+parseInt(two)}`)
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        var one = document.getElementById('op-one').value
        var two = document.getElementById('op-two').value
        alert(`the result is ${one-two}`)
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        var one = document.getElementById('op-one').value
        var two = document.getElementById('op-two').value
        alert(`the result is ${one*two}`)
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        var one = document.getElementById('op-one').value
        var two = document.getElementById('op-two').value
        alert(`the result is ${one/two}`)
    });
})();
