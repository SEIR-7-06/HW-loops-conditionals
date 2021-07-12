// Loop 1-20
for (i = 1; i <= 20; i++){
    console.log(i);
}

// Get Even 0-200
for (i = 0; i <= 200; i += 2) {
    console.log(i);
}

// Excited Kitten
const cat = Math.random([
    "...human...why you taking pictures of me?...", 
    "...the catnip made me do it...",
    "...why does the red dot always get away...",

]);

for (i = 0; i <= 20; i++) {
    if (i % 2 == 0){
        console.log(cat);
    } else {
        
        console.log("Love me, pet me! HSSSSSS!");
    }
}


// Working with arrays

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny[0] = 'Gameboy';
console.log(kenny);

jimClark[1] = jimClark[1] + 1;
console.log(jimClark);

ryan[2] = 'Gotham City';
console.log(ryan);

reuben.pop();
reuben[2] = 'Chicago';
console.log(reuben);

jimHaff.pop();
jimHaff.push('San Fran', 'Tokyo', 'Paris');
jimHaff.splice(2, 1)
console.log(jimHaff);