/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    const mois= ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]
    const jours =["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samdi", "Dimanche"]
    const d = new Date();
    

    document.getElementById("target").innerHTML = `${jours[d.getDay()]} ${d.getDate()} ${mois[d.getMonth()]}, ${d.getHours()}h${d.getMinutes(2)}`
})();
