/*
    This module is responsible for creating the HTML for a list of donuts
*/

import { Jokes } from "./Jokes.js";
import { usedadJokes } from "./JokesDataProvider.js";

/*
    Querying the document for an element that has a class of container and storing that element in a variable called contentTarget
*/

const contentTarget = document.querySelector(".container")

export const JokesList = () => {
     /*
    Invoking the useDonuts function that returns a copy of the donut data, and storing it in a variable called donutArray
    */
   const jokesArray = usedadJokes()

   // Need a for loop to iterate over the donutArray
   for (const jokesObject of jokesArray) {
       // invoking the Donut() function that returns an HTML representation of a donut object
       const jokesHTML = Jokes(jokesObject)
          // putting the donutHTML on the contentTarget element
          contentTarget.innerHTML += jokesHTML
   }

}