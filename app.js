// This is just a test.

// Easy Going

for (let i = 1; i < 21; i++) {
    console.log(i);
}

// Get Even

for (i = 0; i< 201; i+=2) {
    console.log(i);
}

// Excited Kitten

for (let i = 1; i < 21; i++) {
    console.log("Love me, pet me!  HSSSSSS!");
    if (i % 2 == 0) {
        let value = Math.floor(Math.random() * 3);
        if (value == 0) {
            console.log("...human...why you taking pictures of me?...");
        } else if (value == 1) {
            console.log("...the catnip made me do it...");
        } else {
            console.log("...why does the red dot always get away...");
        }
    }
}

// Working with Arrays

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// 1. 

kenny[0] = "Gameboy";
console.log(kenny);

// 2.

jimClark[1] = jimClark[1] + 1;
console.log(jimClark);

// 3.

ryan[2] = "Gotham City";
console.log(ryan);

// 4. 

reuben.pop();
reuben.push("Chicago");
console.log(reuben);

// 5.

jimHaff.pop();
jimHaff.push("Seattle", "Tokyo", "Rome");
console.log(jimHaff);

// 6. 

jimHaff.splice(2, 1);
console.log(jimHaff);

// Yell at the Ninja Turtles

// 1. 

const ninjaTurtles =["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// 2.

for (let i = 0; i < ninjaTurtles.length; i++) {
    console.log(ninjaTurtles[i].toUpperCase());
}