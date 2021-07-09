//  Easy Going

for(let num = 0; num <= 20; num++) {
    console.log(num);
}

//  Get Even

for (let num = 0; num <= 200; num+=2) {
    console.log(num);
}

//  Excited Kitten

let myCat = 'Love me, pet me! HSSSSSS!';

for(let i = 0; i < 20; i++){
    console.log(myCat); 
} 

const catTalk = ['...human...why you taking pictures of me?...', 
'...the catnip made me do it...',
'..why does the red dot always get away'
];
const random = Math.floor(Math.random() * catTalk.length);

for(let i = 0; i < 20; i+=2) {
    console.log(catTalk);
}

//  Working with Arrays

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];


kenny.splice(0, 1, "Gameboy");
console.log(kenny);

jimClark.splice(1, 1, 187);
console.log(jimClark);

ryan.splice(2, 1, "Gatham City");
console.log(ryan);

reuben.splice(2, 1, "Chicago");
console.log(reuben);

jimHaff.splice(2, 1, "ATL", "Brooklyn", "D.C")
console.log(jimHaff);


//  Yell at the Ninja Turtles

const ninjaTurtles = [
    "Donatello", 
    "Leonardo", 
    "Raphael", 
    "Michaelangelo"];

for(let i = 0; i < 4; i++) {
    console.log(ninjaTurtles[i].toUpperCase());
}
