/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    do{
        var name = prompt('your name')
        var age = prompt('your age')
        var gender = prompt('your gender') 
    }
    while(confirm(`your name, age and gender is ${name}, ${age} and ${gender}`)===false)
})();
