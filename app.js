/*CREATE NEW MENU OBJECT*/

let menu = {
  /*menu has COURSES property, with three values*/
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  }
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
      name: this.dishName,
      price: this.dishPrice
    }
    /*use the courseName property to determine which array the new dish gets added to within the Courses object*/
    this._courses[courseName].push(dish);
  },

  /*GET RANDOM DISH METHOD*/
  getRandomDishFromCourse(courseName){
    let dishes = this._courses[courseName];

    let index = Math.floor(Math.random()*dishes.length);

    return this.dishes[index]
  }

}
