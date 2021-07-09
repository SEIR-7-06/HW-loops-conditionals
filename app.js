//Easy Going Question 1
/*for (let i= 0; i<=20; i++) {
    console.log(i);
}


//Get Even Question 1
for (let i = 0; i <= 200; i+=2) {
    console.log(i);
}

//Excited Kitten Question 1
for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! Hssss!");
}

//Excited Kitten Question 2
let catStatements = [
    "human, why you taking pictures of me?", 
    "the catnip made me do it", 
    "why does the red dot always get away"];

let catSays = catStatements[Math.floor(Math.random()*3)];

let i;
for (i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        console.log(catSays);
    }
}*/
//////////////////////////////////////////////
//Working With Arrays
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

//Question 1
kenny[0] = "Gameboy";

//Question 2
    //need to ask a clarity question

//Question 3
ryan[2] = "Gotham City";

//Question 4
reuben.splice(2,1, "Chicago");

//Question 5
jimHaff.splice(2, 1, "Rio", "Paris", "Nairobi");

//Question 3
jimHaff.splice(2,1);
console.log(jimHaff);
