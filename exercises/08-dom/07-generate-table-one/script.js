/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const target = document.getElementById("target")
    let rows = ''
    for(i=0; i<9; i++){
        rows +='<tr><td> OK </td></tr>'
    }

    target.innerHTML =
        `<table>
            ${rows}
        </table>`
})();
