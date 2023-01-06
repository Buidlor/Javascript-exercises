/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const target = document.getElementById('target')
    const button = document.getElementById('increment')
    
    
    target.innerHTML = localStorage.getItem("score")
    let value = Number(localStorage.getItem("score"))
    button.addEventListener("click", () => {
        value = value +1
        localStorage.setItem("score",value)
        target.innerHTML = localStorage.getItem("score")
    })
    
})();
