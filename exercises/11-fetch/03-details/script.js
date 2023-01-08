/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
   

    document.getElementById('run').addEventListener('click',() => {
        
        const template = document.getElementById('tpl-hero')
        const target = document.getElementById('target')

        let herroId = Number(document.getElementById('hero-id').value)
        let inputname = document.getElementsByClassName('name')
        let inputAlterEgo= document.getElementsByClassName('alter-ego')
        let inputPowers= document.getElementsByClassName('powers')

        fetch('http://localhost:3000/heroes')
        .then(response => response.json())
        .then(data => {
            
            target.innerHTML = template.innerHTML
            inputname[0].innerHTML = data[herroId-1].name
            inputAlterEgo[0].innerHTML = data[herroId-1].alterEgo
            inputPowers[0].innerHTML = data[herroId-1].abilities
            
        })
        
         
        
    })
})();
