/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person{
        constructor(firstname, lastname){
          this.firstname = firstname
          this.lastname =lastname  
        }
        get name(){
            return this.setName()
        }

        setName(){
            return `${this.firstname} ${this.lastname}`
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        let people = new Person('Henry', 'Sehudo')
        console.log(people.setName())
        people = new Person('Carl', 'Smith') 
        console.log(people.setName())
    })
})();
