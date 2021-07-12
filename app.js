
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
