/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const input = [
        document.getElementById("part-one"), 
        document.getElementById("part-two"), 
        document.getElementById("part-three"),
        document.getElementById("part-four")
    ]
    const button = [
        document.getElementById("fix-part-one"), 
        document.getElementById("fix-part-two"), 
        document.getElementById("fix-part-three"),
        document.getElementById("fix-part-four")
    ]
    const interval = []

    interval.push(setInterval(() => {
        input[0].value = Math.floor(Math.random()* (499 - 460 + 1)) + 460
    }, 200) )

    for(let i=1; i<=3; i++){
        interval.push(setInterval(() => {
            let digits = Math.floor(Math.random()* 100)
            digits = digits < 10 ? '0' + digits : digits
            input[i].value =  digits    
        }, 200)) 
     }
        
    button.map((ele,i) => ele.addEventListener("click", () => {
        clearInterval(interval[i])
    } ))
    
})();
