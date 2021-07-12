// HW: Arrays, Loops, and Conditional Reps

//////////////////////////////////////////
// Easy Going

for (i=1; i<=20; i++) {
    console.log(i);
}

/////////////////////////////////////////
// Get Even

for (i=0; i<=200; i+=2) {
    console.log(i);
}

/////////////////////////////////////////
// Excited Kitten

for (i=1; i<=20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
    if (i%2==0) {
        const catArray = ["... human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
        console.log(catArray[Math.floor(Math.random() * 3)]);
    };   
}

/////////////////////////////////////////
// Working with Arrays

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// Remove "Kenny" from the 'kenny' array and replace it with "Gameboy".

kenny[0] = "Gameboy";
console.log(kenny[0]);

// Write code to add 1 year to Jim Clark's age.

jimClark[1] = jimClark[1]+1;
console.log(jimClark[1]);

// Change Ryan's hometown from "Denver" to "Gotham City."

ryan[2] = "Gotham City";
console.log(ryan[2]);

// First remove "Durham" from Reuben's array. Then, add "Chicago".

reuben.pop();
console.log(reuben);
reuben.push("Chicago");
console.log(reuben);

// Jim Haff - remove "All cities" then add 3 cities to his array.

jimHaff.pop();
console.log(jimHaff);
jimHaff.push("Tacoma", "San Francisco", "Boston");
console.log(jimHaff);

// Jimm Haff Bonus question - splice out the first of the 3 cities he lives in

jimHaff.splice(2, 1);
console.log(jimHaff);

/////////////////////////////////////////
// Yell at the Ninja Turtles

// Create an array with the ninja turtles members

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// Use a for loop to call .toUpperCase() on each of them and print out the result.

for (i=0; i<=3; i++) {
    console.log(ninjaTurtles[i].toUpperCase());
}

// SPACE FOR THE BONUS QUESTION. Holy crap that one looks hard.

/////////////////////////////////////////
// Return of the Closets

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
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

  // Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use the variable to add it to Thom's accessories array.

  const kristynsShoe = kristynsCloset[0];
  kristynsCloset.splice(0, 1);
  thomsCloset[2].push(kristynsShoe);

  // Modify the code to put together 3 different outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. 

function kristynsOutfit(kristynsCloset) {
    // Establish outfit array
    const kristynsOutfitArray = [];
    
    // Select first element at random
    let krystensFirstPick = kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)];
    // Put into new array
    kristynsOutfitArray.push(krystensFirstPick);

    // Select second element at random
    let krystensSecondPick = kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)];

    // Check if it's already in the new array
    if (kristynsOutfitArray.includes(krystensSecondPick)) {
        kristynsOutfitArray.push(krystensSecondPick);
    } else {
        //I tried out !kristynsOutfitArray.includes(krystensSecondPick) and krystynsOutfitArray.includes(krystensSecondPick != true). The second one just didn't work, but the first one became an infinite loop. I know it's probably because of the multiple instances of 'krystensSecondPick' but I am now stuck.
        while (kristynsOutfitArray.includes(krystensSecondPick)) {
            let krystensSecondPick = kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)];
        }
    }
        //If no, put into new array
    kristynsOutfitArray.push(krystensSecondPick);    

    // Repeat
    let krystensThirdPick = kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)];

    if (kristynsOutfitArray.includes(krystensThirdPick)) {
        kristynsOutfitArray.push(krystensThirdPick);
    } else {
        while (kristynsOutfitArray.includes(krystensThirdPick)) {
            let krystensThirdPick = kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)];
        }
    }
    // Log the items in a sentence.

    console.log(`Krysten chose to wear ${krystensFirstPick}, ${krystensSecondPick}, and ${krystensThirdPick}`);
}

// kristynsOutfit(kristynsCloset);
// kristynsOutfit(kristynsCloset);
// kristynsOutfit(kristynsCloset);

function thomsOutfit() {
    const thomsShirts = thomsCloset[0];
    const thomsPants = thomsCloset[1];
    const thomsAccessories = thomsCloset[2];

    // Select first element at random from first subarray
    let thomsFirstPick = thomsShirts[Math.floor(Math.random() * thomsShirts.length)];

    // Select second element at random from second subarray
    let thomsSecondPick = thomsPants[Math.floor(Math.random) * thomsPants.length];

    // Select third element at random from third subarray
    let thomsThirdPick = thomsAccessories[Math.floor(Math.random) * thomsAccessories.length];

    // Log the items in a sentence.
    console.log(`Thom chose to wear ${thomsFirstPick}, ${thomsSecondPick}, and ${thomsThirdPick}.`);
}

// The second and third items are coming out as 'undefined' for some reason. I took this syntax straight from Kristyn's example, so ???
thomsOutfit();
thomsOutfit();
thomsOutfit();

/////////////////////////////////////////
// Dirty Laundry

// Loop through Kristyn's closet and log washing
for (i=0; i <= kristynsCloset.length; i++) {
    console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
}

// Using "bracket notation" log the arrays (not the elements in the arrays) containing all of Thom's clothes.
// This is imprecisely worded--not sure exactly what is being asked for here. Inventory would imply an itemization of the entire contents of the closet. But to do that would require listing out the elements of each array? This is my best guess at what's being asked.

function thomsInventory() {
    console.log(thomsCloset[0]);
    console.log(thomsCloset[1]);
    console.log(thomsCloset[2]);
}
thomsInventory();

//If the number of items is what was being asked for, this would be the bracket notation for it:

function thomsOtherInventory() {
    let inventory = thomsCloset[0].length + thomsCloset[1].length + thomsCloset[2].length;
    console.log(inventory);
}
thomsOtherInventory();
