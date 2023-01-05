/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const password = document.getElementById('pass-one')
        const confirm = document.getElementById('pass-two')
        const isCorrect = password.value === confirm.value
        
        isCorrect ? password.style.borderColor = "green": password.style.borderColor ="red"
        isCorrect ? confirm.style.borderColor = "green": confirm.style.borderColor ="red"
    })
})();
