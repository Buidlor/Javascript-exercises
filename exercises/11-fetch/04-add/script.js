/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () =>{
        const nom = document.getElementById('hero-name').value
        const alterEgo = document.getElementById('hero-alter-ego').value
        const pouvoirs = document.getElementById('hero-powers').value
       

        if(nom && alterEgo && pouvoirs){
            console.log('you filled in text')
            const addHero = {
                name: nom,
                alterEgo: alterEgo,
                abilities: pouvoirs
            }
            fetch('http://localhost:3000/heroes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(addHero),
            })
            
            console.log(addHero)
        }
        else{
            alert("missing info, make sure to fill in the boxes")
        }
    })
})();
