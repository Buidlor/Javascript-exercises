/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
        const random = Math.floor(Math.random()*100+1)
        console.log(random)
        do{
            var answer = prompt('give the number')
            if (Number(answer) > random){
                alert("too big")
            } else if(Number(answer) < random){
                alert("too low")
            }
            
        }
        while(answer != random && answer !== null)
    
})();
