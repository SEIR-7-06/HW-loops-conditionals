// Easy going //

// for (i =0; i<=20; i++){
//     console.log(i)
// }

// Get Even //

// for (i = 0; i <= 200; i++){
//     console.log(i)
// }

// Excited Kitten //


// let hiveMind = ['...human...why you taking pictures of me?...',
// '...the catnip made me do it...', 
// '...why does the red dot always get away...'];
// let meow = hiveMind[Math.floor(Math.random() * hiveMind.length)];

    
//     for (let affection = 0; affection < 20; affection++){
//         if ( affection % 2 == 0){
//             console.log("Love me, pet me! HSSSSSS!");
//         } else { 
//             console.log(meow);
//         }
// }

// Working with arrays //

// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];

// kenny [0] = 'Gameboy';
// kenny [0] = 'Gameboy';
// jimClark.splice(1, 1, 187)
// ryan [2] = 'Gotham City';
// reuben.pop();
// reuben.push([2], 'Chicago')
// jimHaff.splice(2, 2, 'NY', 'Boston', 'Chicago');
// jimHaff.splice(2, 1 )

// console.log( kenny, jimHaff, reuben, jimClark, ryan);

// Yell at the Ninja Turtles //

const turtlePower = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

for (let halfShell = 0; halfShell < turtlePower.length; halfShell++){
    turtlePower[halfShell] = turtlePower[halfShell].toUpperCase();
if (halfShell % 2 == 1) {
    turtlePower[halfShell] = turtlePower[halfShell].toLowerCase();
}
console.log(turtlePower[halfShell])
}




