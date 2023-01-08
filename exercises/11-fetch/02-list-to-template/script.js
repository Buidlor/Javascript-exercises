/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const target = document.getElementById('target')
    const template = document.getElementById('tpl-hero').innerHTML

    let inputname = document.getElementsByClassName('name')
    let inputAlterEgo= document.getElementsByClassName('alter-ego')
    let inputPowers= document.getElementsByClassName('powers')
    
    const heroes = []

    fetch('http://localhost:3000/heroes')
    .then((response) => response.json())
    .then((data) => heroes.push(...data))

    console.log(heroes)
    
        
    
    document.getElementById('run').addEventListener('click', () => {
        fetch('http://localhost:3000/heroes')
        .then((response) => response.json())
        .then(data => {
            target.innerHTML=''
            data.map((ele,i) => {
            target.innerHTML += `${template}`
            inputname[i].innerHTML = ele.name
            inputAlterEgo[i].innerHTML = ele.alterEgo
            inputPowers[i].innerHTML = ele.abilities
        })
    })

    })

    
})();
