// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: too embrassed to type :D
// b) Verify and explain: this was interesting becuase i also thought that this will add the "indigo" to the end of the array, and then i remembered that when we were doing arrays i thought that it was weired that .push, or .pop returned the index value. 

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 10 : )))) it will return the leangth of the string in amount of index spaces it the string is taking up.
// b) Verify and explain: .length just asks the length i do not remember having quastions about this command, so it is a pritty easy command to see what it does.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: "o"!? For a sure thing it would return the value of the sintring's index, but than what do i know. 
// b) Verify and explain: and yes icheese a correct answer yeay!!! However i was a little skeptical because in class we found out that in the "fruit loop" aka for loops that i-returns index and [i]-returns location (this made sense in my head and in my notes, now it actualy is again not making any sense, need to go back and look at the lecture)***

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])
// console.log(languages(index))


// a) Your answer: "Ruby"?!!! Well it better return ruby, because by all none making sense making in my head it is starting to click. so if i returns the index and the [i] returns the location, maybe it returns the location value?
// b) Verify and explain: well, sticks and stones will have to break something because console.log(languages(index)) is returning : TypeError: languages is not a function... hmmmmmmmmmmmm .... double the hmmmm time. 

const returnMyLanguageBackToMeAndPleseMakeSense = () => {
    return(languages[index])
}
console.log(returnMyLanguageBackToMeAndPleseMakeSense(index))

//i think i just want to confuse myself evenmore. why [] and () return the same thing in defferent situations and returning error in others? is just syntax that i need to remember and chill?! yes... i am going to get some coffe and relax

// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// this aint working
// console.log(weekendDays.toUpperCase())

// i wanna try something: nevermind
// console.log(weekendDays.toUpperCase("")) 

// a) Your answer: ["SATURDAY", "SUNDAY"] .toUpperCase is a built in method that needs none of my  overthinking skills, so i will just leave it at that.
// b) Verify and explain: is this a trick quastion? i am getting an error: weekendDays.toUpperCase is not a function.? WIGO (aka. what is going on?). OVERTHINKING SKILLS AKTIVATE!!!!!

// i wanna try something else: hmmmmmm... Do i need a fruit loop?!!!
console.log(weekendDays.map(item => item.toUpperCase()))

console.log(weekendDays.toString().toUpperCase())
//nope, it didn't need a loop. It olny neeeds a loop or a function if you want to return array as is with all UPPER CASES .toUpperCase is a string method and we are trying to use the built in string method for an array... i died a little inside and rose up from ashes. Here is some S&M for you. 


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(dataTypes.length)
console.log(typeof dataTypes.length)

// a) Your answer: i am scared to answer. NUMBER?
// b) Verify and explain: can i say i am just a geniiiiiiiiouuuuuuuse who-cant-spell, and that is why i know this!!! no? ok, well. It asked for the dataType.length (which by all of my calculations should return 3..... appperantly it will be 4, lets not dwell on this) anyyyyyywho, the typeof is a function that just returns what type of a value of anything you are asking for. YES!YES!YES !!!! no aplause!! thank you, thank you!!!
