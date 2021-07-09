//Author: DK Nam
//Question 1
for(let i = 0; i < 201; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}
//Excited Kitten
for(let i=0; i < 20; i++){
    console.log("Love me, pet me! HSSSSSS!")
}

let reaction = ["...human...why you taking pictures of me?...","...the catnip made me do it...","...why does the red dot always get away..."]
for(let i=0; i < 20; i++){
    if(i%2 === 0){
        rando= Math.floor(Math.random()*3)
        console.log(reaction[rando])
    }
    console.log("Love me, pet me! HSSSSSS!")
}
//Working Arrays
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];
//1.)
kenny.splice(0, 1, "Gameboy");
console.log(kenny[0])
//2.)
jimClark[1] = jimClark[1] + 1;
console.log(jimClark[1])
//3.)
for(let i = 0; i < ryan.length; i++){
    if(ryan[i] === "Denver"){
        ryan[i] = "Gotham City"
        x = i
    }
}
console.log(ryan[x])
//4.)
reuben.splice(2, 1, "Chicago")
console.log(reuben[2])
//5.)
jimHaff.splice(2, 1, "Paris", "Rome", "Seattle")
console.log(jimHaff)
//6.) (This question needs to be commented out for #5 to show up correctly, otherwise it will also be missing Paris)
jimHaff.splice(2,1)
console.log(jimHaff)
