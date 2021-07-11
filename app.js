//1. Easy Going

for (i=0; i<=20;){
    console.log(i);
    i++;
}

//2. Get Even

for (i=0; i<=200;){ 
    console.log(i)
    i = i + 2;
}

//3. Excited Kitten

for (i=0; i<=20;) {
    console.log("love me, pet me! HSSSS!");
    //console.log(i)
    i = i + 1;
}

//4. Working with Arrays

const kenny = ["kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny[0] = "Gameboy";
console.log(kenny);

jimClark[1] = jimClark[1] + 1;
console.log(jimClark);

ryan[2] = "Gotham City";
console.log(ryan)

reuben.pop()
console.log(reuben)
reuben.push("Chicago")
console.log(reuben)

jimHaff.pop()
console.log(jimHaff)
jimHaff.push("Rome", "Athens", "Istanbul")
console.log(jimHaff)

jimHaff.splice(2,1)
console.log(jimHaff)

//6. Yell at the Ninja Turtles

let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let x = 0; x in ninjaTurtles;) {
    ninjaTurtles[x] = ninjaTurtles[x].toUpperCase();
    x = x + 1;
}
console.log(ninjaTurtles);

//7. Return of the Closets
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmellow peeps"
]

const thomsCloset = [[
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
], [
    "grey jeans",
    "jeans",
    "PJs",
], [
    "wool mittens",
    "wool scarf",
    "raybans",
]];

let kristynsShoe = kristynsCloset.shift()
console.log(kristynsShoe)

thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset)

let kOutfitOne = []

for (let i =1; i <=3;) {
    let randNum = (Math.floor(Math.random() * 6))
    kOutfitOne.push(kristynsCloset[randNum]);
    i = i + 1;
}
console.log(kOutfitOne)

let kOutfitTwo = []

for (let i =1; i <=3;) {
    let randNum = (Math.floor(Math.random() * 6))
    kOutfitTwo.push(kristynsCloset[randNum]);
    i = i + 1;
}
console.log(kOutfitTwo)

let kOutfitThree = []

for (let i =1; i <=3;) {
    let randNum = (Math.floor(Math.random() * 6))
    kOutfitThree.push(kristynsCloset[randNum]);
    i = i + 1;
}
console.log(kOutfitThree)


thomOutfitOne = []

for (let x = 0; x<thomsCloset.length; x++){
    let randNum = (Math.floor(Math.random() * thomsCloset.length))
    thomOutfitOne.push(thomsCloset[x][randNum])
}
console.log(thomOutfitOne)

thomOutfitTwo = []

for (let x = 0; x<thomsCloset.length; x++){
    let randNum = (Math.floor(Math.random() * thomsCloset.length))
    thomOutfitTwo.push(thomsCloset[x][randNum])
}
thomOutfitThree = []
for (let x = 0; x<thomsCloset.length; x++){
    let randNum = (Math.floor(Math.random() * thomsCloset.length))
    thomOutfitThree.push(thomsCloset[x][randNum])
}

console.log(thomOutfitOne)
console.log(thomOutfitTwo)
console.log(thomOutfitThree)

// 8. Dirty Laundry

for (let x = 0; x<kristynsCloset.length;(x++)){
    console.log(`WHIRR: Now washing ${kristynsCloset[x]}`)
}
let thomsShirts = (thomsCloset[0])
let thomsPants = (thomsCloset[1])
let thomsAccessories = (thomsCloset[2])

console.log(thomsShirts,thomsPants,thomsAccessories)