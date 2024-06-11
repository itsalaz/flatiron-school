/*

Phase 1 -> Creating data with JSON Server and POST requests
Updated March 15, 2024
Created May 26, 2023
by Sakib Rasul

Objectives
1. Run an instance of JSON Server that hosts a dataset.
1. Make a GET request to display a dataset.
2. Make a POST request to add to that dataset.

*/

// Let's try making a GET request to display existing data on the page.

// Now, let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.


// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function!
// 2. Try writing your own POST request.
// 3. Try writing PATCH and DELETE requests!


fetch("http://localhost:3000/candies")
.then(response => response.json())
.then(candies => {
  console.log(candies)
})
  .catch(error => console.log(error))


document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault()
  const newCandy = {
  name: event.target["name"].value,
  chocolate: event.target["chocolate"].checked
}
  console.log(newCandy)
})


document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault()
  const newCandy = {
  name: event.target["name"].value,
  chocolate: event.target["chocolate"].checked
}
  fetch("http://localhost:3000/candies", {
    method: "POST"
    headers: {
      "Content-Type":"aaplication/json"
      "Accept": "application/json"
    },
      body: JSON.stringify(newCandy)
  })
  .then(response => response.json())
  .then(newCandyInDb => {
    console.log(newCandyInDb)
  })
  console.log(newCandy)
})