// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// Pseudo code: we need to create a function that takes in one variable aka. argument and passes it through the if else statement semi looping throug the code to see if the temerature is below, above or at a comfortoble point of boiling.
//input: i will create a function and it shall be called boilOfNoReturn. I will create an argument aka. variable an it shall be called waterTemp.
//output: should be as expected, however i will change some stuff up and the below boilng point will put the "No one is boiling no lobster at 42", at above boiling point it will say: "350 is a little too hot for a jacuzi". And the boiling will say: "212 is just right, dinner will be ready soon."
//process: This function is not self invoking, it will require an input.

const boilOfNoReturn = (waterTemp) => {
    if (waterTemp <= 42) {
        return "No one is boiling no lobster at 42"
    } else if (waterTemp > 212) {
        return "350 is a little too hot for a jacuzi"
    } else {
        return "212 is just right, dinner will be ready soon."
    }
}
console.log(boilOfNoReturn(42))
console.log(boilOfNoReturn(350))
console.log(boilOfNoReturn(212))


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// INPUT: one function addUp and 2 variables aka. arguments will be passed on to my code and it shall bring the solution to us all.
// OUTPUT: as expected should be the length of two arrays summed up and joind like it was done in one movie that-shall-not-be-named (becuase it is just to desturbing), and than sang in the song by Tom Cardy "Red Flags". 
// PROCESS: "This function is not self invoking, it will require an input." -me

const addUp = (str1, str2) => {
    return str1.length + str2.length
}
console.log(addUp(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns))

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Foxtrot 2023"
// Expected output: "3202 tortxoF"

// Pseudo code:
//INPUT: i was stressing a lot but what i realized is that the less i stress the more it makes sense. As it turns out the function just takes in the variable and makes it go to work, and console.log makes me go to work. So the input is THE VARIABLE
// OUTPUT: it is the reverse string
// PROCESS: the first one will be just a console.log() and the second one is wil be: "This function is not self invoking, it will require an input." -me
// NOTES && QUASTIONS:
// THIS didn't work:
// console.log(currentCohort.split(""))
// console.log(currentCohort.reverse(""))
// console.log(currentCohort.join(""))
// Why NOT???
// AND
// ??? since i turned the string into an array and than reversed and joind it, why did it come back as a string not stayed as an array???

console.log(currentCohort.split("").reverse("").join(""))

const trohocTnerruc = (fox) => {
    return fox.split("").reverse("").join("")
}
console.log(trohocTnerruc(currentCohort))



// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.


// Pseudo code: No function here, just good old code. 
// INPUT: in one instance i will ldo the good old console.log and just do the entire work inside that log. In another instance i will create a new variable. and will ask console.log just call on this new variable.
// OUTPUT: the last index of the value given
// PROCESS: "This function is self invoking." -me
// NITES: trying to work with index and what and how it can return it. I can tell you that i was confused when "[]" returned: undefined. But than i realised that i was asking for the index 42 to return a value, and obviously there is no index 42 in this array. So yeah. 

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

console.log(numberOfConnections.lastIndexOf(givenValue1))

const givenValue2 = 10
// Expected output: 8

var numrO = numberOfConnections.lastIndexOf(givenValue2)
console.log(numrO)