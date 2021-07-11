//Easy Going
for(let i = 1; i <= 20; i++){
    console.log(i)
}

//Get Even
for(let i = 0; i <= 200; i+=2){
    console.log(i)
}

//Excited Kitten

for(let i = 1; i <= 20; i ++ ){
    if(i % 2 === 0){
        console.log("...human...why you taking pictures of me?...")
    } else {
    console.log("Love me, pet me! HSSSS!")
    }
}

//Working with Arrays

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

//1.
kenny.splice(0,1,"Gameboy")
console.log(kenny)

//2.
jimClark.splice(1,1, jimClark[1]+1)
console.log(jimClark)

//3.
ryan.splice(2,1,"Gotham City")
console.log(ryan)

//4.
reuben.splice(2,1,"Chicago")
console.log(reuben)

//5.
jimHaff.splice(2, 3, "Phoenix ", "Kansas City ", "Corpus Christi")
console.log(jimHaff)