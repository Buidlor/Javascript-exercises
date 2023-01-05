/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    const image = document.getElementsByTagName("img")[0]
    const target = document.getElementsByTagName("figure")[0]
    image.addEventListener("mouseover", () => {
       
        target.innerHTML =`<img src = ${image.getAttribute("data-hover")}></img>`

    })

})();
