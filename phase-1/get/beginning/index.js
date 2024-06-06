
fetch(https://dogapi.dog/api/v2/facts")
.then(response => response.json())
.then(convertedResponse => {
  console.log(convertedResponse.data[0].attributes.body)
}


/*

Phase 1 -> GET
Updated April 25, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

// A synchronous request to https://dogapi.dog/docs/api-v2.
https://dogapi.dog/api/v2/facts

// A synchronous request to https://anapioficeandfire.com/api/books.

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"

// ~ Challenge: Make a GET request to an API of your choice!


