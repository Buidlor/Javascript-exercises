/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let spookyDays = []
        let year = document.getElementById("year").value
        const d = new Date()
        d.setFullYear(year)
        for(month=0; month<=11 ; month++){
            d.setMonth(month)
            for(day=1; day <=31; day++){
                d.setDate(day)
                if(d.getDay() === 4 && d.getDate() ===31){
                    spookyDays.push(d)
                }
            }
        }
    
        console.log(d.getFullYear())
        alert(spookyDays)
    

    })
})();
