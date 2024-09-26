////////////////  Easy Going

for(let num = 0; num <= 20; num++) {
    console.log(num);
}

//////////////  Get Even

for (let num = 0; num <= 200; num+=2) {
    console.log(num);
}

////////////////  Excited Kitten

let myCat = 'Love me, pet me! HSSSSSS!';

for(let i = 0; i < 20; i++){
    console.log(myCat); 
} 

const catTalk = ['...human...why you taking pictures of me?...', 
'...the catnip made me do it...',
'..why does the red dot always get away'
];
const randomIndex = Math.floor(Math.random() * catTalk.length);

for(let i = 0; i < randomIndex; i+=2) {
    console.log(catTalk[i]);
}

/////////////   Working with Arrays

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


/////////////  Yell at the Ninja Turtles

const ninjaTurtles = [
    "Donatello", 
    "Leonardo", 
    "Raphael", 
    "Michaelangelo"];

for(let i = 0; i < 4; i++) {
    console.log(ninjaTurtles[i].toUpperCase());
}

// /////////////   RETURN OF THE CLOSETS 


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

//////// ALIEN ATTIRE

  kristynsCloset.splice(0, 1, 0);
  console.log(kristynsCloset);

  const kristynShoe = "left shoe";

const kristynsOutfit = [
    "Kristyn is wearing Nike hoodie and sweat pants today!",
    "Kristyn is wearing pj's today.",
    "Kristyn is wearing her birthday suit today!"
];

for (let i = 0; i < 3; i++){
    console.log(kristynsOutfit[i]);
}

const thomsOutfit = [
    "Thom's wearing a light blue button up and grey pants.",
    "Thom's wearing a white-t and basketball shorts.",
    "Thom's wearing a suit from Suit Supply."
];

for (let i = 0; i < 3; i++) {
    console.log(thomsOutfit[i]);
}

////////// DIRTY LAUNDRY 

for (let i = 0; i < kristynsCloset.length; i++){
    console.log( "WHIRR: now washing " + kristynsCloset[i] ); 

}

for (let i = 0; i < thomsCloset.length; i++) {
    console.log(thomsCloset[i]);
}