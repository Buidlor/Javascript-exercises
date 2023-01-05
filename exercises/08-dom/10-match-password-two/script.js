/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
       document.getElementById("run").addEventListener("click", () => {
        const password = document.getElementById('pass-one')
        const confirm = document.getElementById('pass-two')
     
        
        const isCorrect = password.value === confirm.value
        !isCorrect ? password.classList.add('error'): 0
        !isCorrect ? confirm.classList.add('error'): 0
    })
})();
