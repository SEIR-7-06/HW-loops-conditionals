/*//Easy Going Question 1
for (let i= 0; i<=20; i++) {
    console.log(i);
}


//Get Even Question 1
for (let i = 0; i <= 200; i+=2) {
    console.log(i);
}

//Excited Kitten Question 1
for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! Hssss!");
}

//Excited Kitten Question 2
let catStatements = [
    "human, why you taking pictures of me?", 
    "the catnip made me do it", 
    "why does the red dot always get away"];

let catSays = catStatements[Math.floor(Math.random()*3)];

let i;
for (i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        console.log(catSays);
    }
}
//////////////////////////////////////////////
//Working With Arrays
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

//Question 1
kenny[0] = "Gameboy";

//Question 2
let jimClarkAge = jimClark[1]
let jimClarkBirthdayUpdate = jimClarkAge + 1
jimClark[1] = jimClarkBirthdayUpdate
console.log(jimClark[1]);

//Question 3
ryan[2] = "Gotham City";

//Question 4
reuben.splice(2,1, "Chicago");

//Question 5
jimHaff.splice(2, 1, "Rio", "Paris", "Nairobi");

//Question 6
jimHaff.splice(2,1);

//Yell at the Ninja Turtles

//Question 1
let ninjaTurtles = [
    "Donatello", 
    "Leonardo", 
    "Raphael", 
    "Michaelangelo"]

//Question 2
let i;
for ( i = 0; i < ninjaTurtles.length; i++) {
    console.log(ninjaTurtles[i].toUpperCase());
}

//Question 3
    //Come back to this one, still needs worked out
let i;
for ( i = 0; i < ninjaTurtles.length; i++) {
    if (i % 2 == 0) {
        console.log(ninjaTurtles[i].toUpperCase());
    } else {
            console.log(ninjaTurtles[i].toLowerCase())
    }
}*/

//Return of the Closets
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];


 /* //Question 1
let kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);*/

//Question 2
  //Come back to this one - convoluted
let kristynWearsOne = kristynsCloset[Math.floor(Math.random()*7)];
let kristynWearsTwo = kristynsCloset[Math.floor(Math.random()*7)];
let kristynWearsThree= kristynsCloset[Math.floor(Math.random()*7)];

let outfitOne = kristynWearsOne;
let outfitTwo = kristynWearsTwo;
let outfitThree= kristynWearsThree;

console.log("Hi, I'm Kristyn, and today I'll be wearing", 
    outfitOne, "and", outfitTwo, "and", outfitThree, ".");

//problem here in that thom sometimes wears things from the same family
thomsWearsOne = thomsCloset[Math.floor(Math.random()*3)][Math.floor(Math.random()*3)];
thomsWearsTwo = thomsCloset[Math.floor(Math.random()*3)][Math.floor(Math.random()*3)];
thomsWearsThree = thomsCloset[Math.floor(Math.random()*3)][Math.floor(Math.random()*3)];

let fitOne = thomsWearsOne;
let fitTwo = thomsWearsTwo;
let fitThree= thomsWearsThree;

console.log("Hi, I'm Thom, and today I'll be wearing",
    fitOne, "and", fitTwo, "and", fitThree, ".");


//Dirty Laundry
//Question 1
for (let i = 0; i <kristynsCloset.length; i++) {
    console.log("WHIRR:Now washing", kristynsCloset[i] +".");
}

//Question 2
    //Come back to this one
//console.log(thomsCloset.length);

////////////////////////////Hungry For More
//Fizz Buzz


