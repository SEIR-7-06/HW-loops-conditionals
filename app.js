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

