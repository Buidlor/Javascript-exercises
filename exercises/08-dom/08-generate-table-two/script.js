/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const target = document.getElementById("target")
    

    let row =''
    
    for(i=1; i<=10; i++){
        let muliplicator = []
        for (j=1; j<=10;  j++){
            muliplicator.push(i*j)
        }
        row += `
        <tr>
            <td>   Multiplication Table ${i}:  </td>
            <td>  ${muliplicator.join(' ')} </td>
        </tr>`

    }


    target.innerHTML= `<table>${row}</table>`
})();
