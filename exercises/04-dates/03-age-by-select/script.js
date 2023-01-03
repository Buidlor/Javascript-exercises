/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const d = new Date();
        let jour= document.getElementById("dob-day").value
        let mois= document.getElementById("dob-month").value
        let annee= document.getElementById("dob-year").value
        let age = 0
       
        if ( d.getMonth()+1 > mois){
            age = d.getFullYear() - annee 
            console.log(" bd past months")
        } 
        else if(d.getMonth()+1 ==  mois){
            if(d.getDate() >= jour ){ 
                age = d.getFullYear() - annee
                console.log("bd past few days")
            } 
            else {
                age = d.getFullYear() - annee -1
                console.log("bd this month but not yet happened")
            }
        }
        else{
            age = d.getFullYear() - annee -1
            console.log("bd in months")
        } 
       alert(`your age is ${age}`)
        
    });
    

})();
