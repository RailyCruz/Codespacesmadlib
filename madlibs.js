//variables - analogy - moving box - labled on  the outside, stores things inside

// let keyword declares a variable that can have its value changed
// const - value cannot be changed

//data type for words? string
let noun = "wizard";
let verb = "cast";
let adjective = "mysterious";

// A numeric value
let age = 150;

// A number calculated from an expression involving at least one other number
let yearsSinceEvent = age - 50;

// A true/false value
let isFriendly = false;

// A value entered by the user using prompt
let userName = prompt("Enter your name:");

// Create a short story using these variables
let story = "Once upon a time, in a faraway land, there was a " + adjective + " " + noun + " who was " + age + " years old. " +
            "He " + verb + " a spell " + yearsSinceEvent + " years ago that changed the world forever. " +
            "Many believe the wizard was friendly, but that is " + isFriendly + ". " +
            "However, legends say that only someone named " + userName + " could break the spell.";

// Output the story to the console
console.log(story);
