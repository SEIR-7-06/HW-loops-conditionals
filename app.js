//1. Easy Going

for (i=0; i<=20;){
    console.log(i);
    i++;
}

//2. Get Even

for (i=0; i<=200;) {
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

