/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
   
    
    document.getElementById("run").addEventListener("click", ()=>{
        let array=[]
        for(i=1; i<=10; i++){
            let ele = Math.floor(Math.random()*100)
            array.push(ele)
            document.getElementById(`n-${i}`).innerHTML = ele
        }
        console.log(Math.min(array))
        document.getElementById("min").innerHTML= Math.min(...array)
        document.getElementById("max").innerHTML= Math.max(...array)
        document.getElementById("sum").innerHTML= array.reduce((a,b) => a+b)
        document.getElementById("average").innerHTML= array.reduce((a,b) => a+b)/array.length
        
    })
})();
