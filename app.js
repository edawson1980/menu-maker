/*CREATE NEW MENU OBJECT*/

let menu = {
  /*menu has COURSES property, with three values*/
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  /*CREATE GETTER METHOD FOR THE COURSES OBJECT*/
  get courses(){
    return{
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts

    }
  },

  /*CREATE GETTERS AND SETTERS FOR EACH VALUE*/
  get appetizers(){

  },
  set appetizers(appsInput){

  },
  get mains(){

  },
  set mains(mainsInput){

  },
  get desserts(){

  },
  set desserts(dessertInput){

  },
  /*ADD DISH METHOD*/
  addDishToCourse(courseName, dishName, dishPrice){
    let dish = {
      name: dishName,
      price: dishPrice
    }
    /*use the courseName property to determine which array the new dish gets added to within the Courses object*/
    this._courses[courseName].push(dish);
  },

  /*GET RANDOM DISH METHOD*/
  /*pulls the entire array for a particular course, then randomly finds and indexed spot within the array and returns it*/
  getRandomDishFromCourse(courseName){
    let dishes = this._courses[courseName];

    let index = Math.floor(Math.random()*dishes.length);

    return dishes[index]
  },

  generateRandomMeal(){


    /*course names have to be in quotations, because they are variables inside an object*/
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');


    let totalPrice = appetizer.price + main.price + dessert.price;

    return `Today's menu is ${appetizer.name} to start, ${main.name} for an entree, and followed by ${dessert.name}.  The total bill comes to ${totalPrice}. `
  }



}
menu.addDishToCourse('mains', 'beef', 3.00);
menu.addDishToCourse('mains', 'pesto', 5.00);
menu.addDishToCourse('mains', 'chicken', 6.00);
menu.addDishToCourse('mains', 'spaghetti', 4.00);

menu.addDishToCourse('appetizers', 'canapes', 12.00);
menu.addDishToCourse('appetizers', 'pickles', 5.00);
menu.addDishToCourse('appetizers', 'deviled eggs', 3.00);


menu.addDishToCourse('desserts', 'ice cream', 12.00);
menu.addDishToCourse('desserts', 'a fistful of gummy bears', 2.00);
menu.addDishToCourse('desserts', 'raspberries', 3.00);
menu.addDishToCourse('desserts', 'flan', 6.00);

console.log(menu.courses.mains);
console.log('testing');

document.getElementById('results').innerHTML = menu.generateRandomMeal();
