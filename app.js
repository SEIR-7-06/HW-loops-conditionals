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

//Yell at the Ninja Turtles
 const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
 
 for(i = 0; i < ninjaTurtles.length; i++){
     console.log(ninjaTurtles[i].toUpperCase())
 }

 //Return of the closets
 const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
     [ 
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
//1.

  kristynsCloset.splice(0,1)
  console.log(kristynsCloset)
  const kristynsShoe = "left shoe"

  thomsCloset[2].splice(0 , 0, kristynsShoe)
  console.log(thomsCloset)

//2.

console.log("Kristyn is wearing " + kristynsCloset[3] + ", a " + kristynsCloset[4] + ", and some " + kristynsCloset[0] + ".")

console.log("Thom is wearing " + thomsCloset[0][0] + ", a pair of " + thomsCloset[1][1] + ", and a " + thomsCloset[2][1] + ".")


//Dirty Laundry

//1.
for (let i = 0; i <= kristynsCloset.length; i++){
    console.log("WHIRR: Now washing " + kristynsCloset[i])
}

//2.
const shirts = thomsCloset[0]
const pants = thomsCloset[1]
const accessories = thomsCloset[3]

console.log(shirts , pants , accessories)


