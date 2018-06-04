// Constructor function
// Capital first letter to denote that it's a blueprint (constructor function)

/* function Person(fullName, favColor) {  <--- OLD ES5 WAY */
class Person {
    constructor(fullName, favColor) {
        this.name = fullName;
        this.favoriteColor = favColor;
    }
    greet() {
        console.log("HI THERE "+this.name+" and my favorite color is "+this.favoriteColor+".");
    }
}
/* OLD NODE WORKAROUND FOR EXPORTING FILES 
// When having another file require this file, need another step.
// Must specify what this file will export, or return.
module.exports = Person;  */

// NEW ES6 STANDARD FOR EXPORTING FILES
export default Person;