/*

Phase 1 -> Appendix
Created March 17, 2024
by Sakib Rasul

Objectives
1. Learn about the following advanced programming concepts:
   - First-class citizens - functions, objects, classes -- something that has every capability that language has to offer, 
   - Compilation and execution
      Compilation - when code is prepared - allocates memory for code, understands its scope 
      Execution - when code is executed, storing values in variables 
   - Algorithmic complexity
      - Want to think about how efficient your solution is in time and space 
         High-time complexity - slow
         Low-time complexity - fast 
         High-space complexity - large 
         Low-Space complexity - small
      (most common - in order of increased complexity)
      -O(1) - constant speed / memory -- has a complexity of 1 (great if you can, but often not possible -- usually the more you put in the slower it will take)
      - O(log n) - (another way to see ^, (logarithmic), not dependant on n (size of input), your input can be the size that you want and the time/space is always the same 
      -O(n) - (linear) -- proportional, as time grows space grows proportionally 
      - O(n^2)
      -O(n^2), O(n^3), etc. (exponential) growing exponentially 


      ** looking at complexity as relative to input size 
(FOR INTERVIEWS)
1. Restate problem + understand edge cases 
   (say it outloud with how you understand)
   edge cases- some assumptions you have to make to make solutions 
      - what if there is an empty list, do I run error? (things to think about)
2. Write a "simple" solution -- don't need to write the perfect solution right away, just get to a solution
3. Discuss optimality -- this solution works but has too many variables (high space complexity) -- can do with fewer number of variables 
   - were able to print list of names but didn't print error if absent 





2. Learn about the following advanced JavaScript concepts:
   - Immediate invocation
      console.log("~ IMMEDIATE INVOCATION ~")
      // we can immediately invoke function upon declaration with (definition)(arguments)
      (function sayHi(name) { console.log("Hi," + name + "!"); }) (Sakib)
   - Context
      console.log("~CONTEXT~")
      how a function is able to be a first class citizen -- there is something outside of the function
      -- a function context is an object it can access with the keyword 'this'
      - we can use the function methods 'apply' 'call' and 'bind' to define a function context 
      
      function greet(end) { console.log("Hello" + "" + this.name + end)}

      this.name says hello to the context -- must have context specified 
      // this is a function that constructs a console.log() outside of parameter and function's context 

      Ways to specify context:
      1) .apply()
     
      function greet(end) { console.log("Hello" + "" + this.name + end)}

      // call greet with a context ('this') of { name: Ray } and an end argument of "!"
         greet.apply({ name: "Ray"}, ["!"])
         (if (end) had multiple things [] would be multiple things)

         greet.call({name: "Yidy"}, "!")
         // executes function with an object reference and list of arguments 

         const greetFelix = greet.bind( {name: "Felix", "."})
         greetFelix
         // returns a function with and object reference and array of arguments 
         //greet.bind has a return value and that return value is a function
   - Array methods
   console.log("~ADVANCED ARRAY METHODS~")
   // forEach isn't the only, learn some more ways 


   const name = ["Sakib", "Elizabeth", "Pedro"]
   names.forEach(name => { console.log(name)})
 
   array.find()
   console.log(names.find(name => {return name.length > 5}))

   array.reduce()
   const numbers = [1,2,3]
   console.log(numbers.reduce((sum, number) => {return sum + number}))

   // accumulator - was will eventually be value you will reduce into 
      have a variable for what you are accumulating, and a variable for what you want to accumulate into accumulator
      return how the accumulator will be modified 
   
   array.filter()
   console.log(names.filter(name => {return name.length > 5}))

   aray.map()
   console.log(names.map(name => { return name.length > 5})

   map multiple -- console.log(names.map(name => {return {length: name.length, isLong: name.length > 5} }))
   
Takeaways
- When faced with a problem, (a) understand its objectives and edge cases, (b) write some solution,
       and then (c) work towards case coverage and optimal time and space complexity.
- Hold onto `map` and `filter` for Phase 2!








*/

// ~ First-Class Citizens
// A **first-class** object or **citizen** is one that has every capability a language has to offer.
// In JavaScript, functions are first-class citizens.

// ~ Compilation and Execution
// During **compilation**, JavaScript allocates memory for your code, and understands its scope(s).
// During **execution**, JavaScript runs your code line-by-line, stores values in variables, and executes functions.

// ~ Algorithms in Time and Space
// An **algorithm** is a set of instructions that, when run, accomplish some task.
// **Big O notation** is a way of quantifying how "good" an algorithm is.
// By "good", we mean fast (no. of small operations) and/or small (amount of memory taken up by operations).
// Big O describes this "goodness" as a factor of n, the algorithm's input size.
// Common big O descriptions include:
// - O(1): **constant** speed or memory
// - O(log n): **logarithmic** speed or memory
// - O(n): **linear** speed or memory
// - O(n^2): **quadratic** speed or memory
// - O(n^2), O(n^3), etc.: **exponential** speed or memory




// ~ Challenges
// 1. Write a function that takes an array of sentences and returns only those that are questions.

// 2. Write a function that takes an array of lowercased sentences and returns them capitalized.





//1 
const phrases = ["hello, there!", "how are you?", "It's me!"]; // example array for #1 and #2
   console.log(phrases.filter(phrase => { return phrase.endsWith("?") 
   }))



// 2)

capPhrases = phrases.map(phrase => { return phrase.toUpperCase()
   })
      console.log(capPhrases)
   


//console.log(phrases.map(phrase => { return phrase.charAt(0).toUpperCase()+ phrase.slice(1)}))
