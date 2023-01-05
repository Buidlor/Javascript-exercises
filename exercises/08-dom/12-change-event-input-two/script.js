/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const input = document.getElementById('pass-one')
    input.maxLength = 16
    console.log(input.value.length)
    document.getElementById('pass-one').addEventListener("input", () => {
        const validity = document.getElementById('validity')
        let matches = input.value.match(/\d+/g)
        matches = matches != null && matches.join('')
        console.log(matches)
        input.value.length >= 8  && matches != null && matches.length >=2 ?  validity.innerHTML ="OK":0
        
    })
})();
