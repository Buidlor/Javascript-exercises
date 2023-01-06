/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const button = [document.getElementById("part-one"), 
        document.getElementById("part-two"), 
        document.getElementById("part-three"),
        document.getElementById("part-four")
    ]
    const target = document.getElementById("target")
    

    button.map((ele,i) => ele.addEventListener("click", () => {
        increment(i)
        target.innerHTML = button.map( ele => ele.innerHTML).join('')
    } ))

    

    const increment =(x) => {
        let min = Number(button[x].getAttribute("data-min"))
        let max = Number(button[x].getAttribute("data-max"))
        min<max ? min++ : 0
        console.log("pressed button", x)
        button[x].innerHTML= min < 10 ? "0"+min: min
        button[x].setAttribute("data-min", min)
        
    }

})();
