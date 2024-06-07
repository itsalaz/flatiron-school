

/*

Phase 1 -> GET
Updated April 25, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

/* 
fetch("https://dogapi.dog/api/v2/facts")
.then(response => response.json()) //convert json to javascript 
.then(convertedResponse => { // to convert the response and do something with it 
  const facts = convertedResponse.data[0].attributes.body
  const dogSpan = document.querySelector("#dog") 
  dogSpan.textContent = facts
  // can also use document.querySelector("#dog").textContent = fact 
  // how you get get requests 

})

.catch(error => {
  console.error(error)
  // shows the error
})

*/



fetch("https://emojihub.yurace.pro/api/random")
.then(response => response.json())
.then(convertedResponse => {
  const facts = convertedResponse.name
  const dogSpan = document.querySelector("#dog")
  dogSpan.textContent = facts
})
.catch(error => {
  console.error(error)
})
// A synchronous request to https://dogapi.dog/docs/api-v2.
// https://dogapi.dog/api/v2/facts

// A synchronous request to https://anapioficeandfire.com/api/books.

fetch ("https://anapioficeandfire.com/api/books")
.then (response => response.json())
.then (books => { // this is an array [ beginning so the sytax will look like this 
  books.forEach((book) => {
    const bookLi = document.createElement("li")
    bookLi.textContent = book.name
    document.querySelector("#got").append(bookLi)
  });
})
.catch(error => console.error(error))
// can use createdResponse more then once because you are in a different local scope 

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"
async function getPokemon(name) {
  try {
    // make a get request for a pokemon and save it to response 
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name) // converting the response into javascript and save it in pokemon 
    const pokemon = await response.json()
    document.querySelector("#pokemon").textContent = pokemon.name
  } catch(error) {
    console.error(error)
  }
};

getPokemon("gengar")
// ~ Challenge: Make a GET request to an API of your choice! 


