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
    const Interval1 = setInterval(() => {
        console.log("my friend")
        input.map(ele => ele.value = Math.floor(Math.random() * (499 - 460 + 1)) + 460 )
    }, 700); 
    
        input[1].value = Math.floor(Math.random()*100)
        input[2].value = Math.floor(Math.random()*100) 
        input[3].value = Math.floor(Math.random()*100)


        button.map((ele,i) => ele.addEventListener("click", () => {
    
        } ))


  
    
})();
