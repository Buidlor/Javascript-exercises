/* becode/javascript
 *
 * /09-misc/03-worst-ui-one/script.js - 9.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const slider = document.getElementById("slider")
    const target = document.getElementById("target")
    slider.addEventListener("input", () => {
        console.log(slider.value)
        target.innerHTML=`+${slider.value}`
    })
})();
