
// EASY GOING
// Write a for loop that will log the numbers 1 through 20.

let num = 0;
while (num < 20) {
    console.log(num +=1)
}

// GET EVEN
// Write a for loop that will log only the even numbers in 0 through 200.


let num2 = 0;
    while (num2 < 200) {
        console.log(num2 +=2)
    }

// EXCITED KITTEN
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

for (let i = 0; i < 20; i++) {
    console.log ("Love me, pet me! HSSSSSS")
}

// 2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

let kitty = [
    "...human...why you taking pictures of me?...",
    "...the catnip made me do it...",
    "...why does the red dot always get away..."
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  for (let i = 0; i < 20; i++) {
      if (i % 2 === 0) {
          console.log(kitty[getRandomInt(3)])
      } else {
          console.log("Love me, pet me! HSSSSSS")
      }
  }

  // WORKING WITH ARRAYS

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// 1. Jim Clark decides that Kenny can't be named "Kenny" anymore. 
// Remove "Kenny" from the `kenny` array and replace it with "Gameboy".

kenny.splice(0,1,'Gameboy')

// 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older.  
// Don't just hard code `187`--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.

jimClark[1] = jimClark[1]+1

// 3. Ryan is Batman maybe. Or possibly Robin. 
// Change Ryan's hometown from "Denver" to "Gotham City".

ryan[2] = "Gotham City"

// 4. Reuben left Durham 5 years ago to come to Chicago. 
// First, remove "Durham" from Reuben's array, and then add "Chicago".

reuben.splice(2,1,'Chicago')

// 5. Jim Haff could be literally anywhere in the world. 
// Remove "All cities" from his array, then pick any 3 cities you like, 
// and add them to Jim's array. If you did it in 3 lines of code that's fine, but 

jimHaff.splice(2,1,'Vail', 'Jackson', 'Aspen')


// ## Yell at the Ninja Turtles
// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

const ninjaTurtles = [
    'Donatello', 
    'Leonardo', 
    'Raphael', 
    'Michaelangelo'
]

// 2. Use a `for loop` to call `.toUpperCase()` on each of them and print out the result.

for (let index = 0; index < ninjaTurtles.length; index++) {
    console.log(ninjaTurtles[index].toUpperCase())
}

// ## Return of the Closets

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
  
  // 1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! 
  // Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. 
  
  kristynsShoe = kristynsCloset[0]
  
  console.log(kristynsShoe)
  
  kristynsCloset.splice(0,1)
  
  console.log(kristynsCloset[0])
  
  // Use that variable to add Kristyn's lost shoe to Thom's accessories array.
  
  // thomsCloset.splice(0,1)
  
  // Use that variable to add Kristyn's lost shoe to Thom's accessories array.
  thomsCloset[1][3] = kristynsShoe
  
  console.log(thomsCloset[1][3])
  
  // 2. Modify your code to put together **3 separate outfits** for Kristyn and Thom. 
  // Put the output in a sentence to tell us what we'll be wearing. Mix and match!
  
  const thomOutfit1 = [
      thomsCloset[0][0],
      thomsCloset[1][0],
      thomsCloset[2][0]
  ]
  const thomOutfit2 = [
      thomsCloset[0][1],
      thomsCloset[1][1],
      thomsCloset[2][1]
  ]
  const thomOutfit3 = [
      thomsCloset[0][2],
      thomsCloset[1][2],
      thomsCloset[2][2]
  ]
  
  const kristynOutfit1 = [
      kristynsCloset[0],
      kristynsCloset[1],
      kristynsCloset[2]
  ]
  
  console.log('Thom will be wearing', thomOutfit1 + '.', 'Kristyn will be wearing', kristynOutfit1 + '.')
  
  // ### Dirty Laundry
// Continue looking at the closet arrays:
// 1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)"
// for each item in the array.

for (let i = 0; i < kristynsCloset.length; i++){
    console.log('WHIRR: Now washing', kristynsCloset[i])
}

// 2. Thom wants to do inventory on his closet. 
// Using **bracket notation**, log the **arrays** (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.

console.log(`Thom has ${thomsCloset[0].length} shirts. Thom has ${thomsCloset[2].length} pants. Thom has ${thomsCloset[2].length} accessories.`)
