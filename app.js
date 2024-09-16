// Loop 1-20
for (i = 1; i <= 20; i++){
    console.log(i);
}

// Get Even 0-200
for (i = 0; i <= 200; i += 2) {
    console.log(i);
}

// Excited Kitten
const catQuotes = [
    "...human...why you taking pictures of me?...", 
    "...the catnip made me do it...",
    "...why does the red dot always get away...",
];
// Get a random number, either 0, 1, 2
const getRandomNum = Math.floor(Math.random() * 3)

for (i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(catQuotes[getRandomNum]);
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

// Yell at TMNT
const turtle = ['leonardo', 'raphael', 'donatello', 'michaelangelo'];

for ( i = 0; i <= 4; i++) {
    // console.log(turtle[i].toUpperCase());
}

// Alien Attire

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

  kristynsCloset.splice(0, 1);

  console.log(kristynsCloset);

 const kristynsShoe = 'left shoe';

 thomsCloset[(2)].splice(1, 0, kristynsShoe);

 console.log(thomsCloset);

 // Dirty laundry

 for (i = 0; i < kristynsCloset.length; i++) {
     console.log("WHIRR: Now washing " + kristynsCloset[i]);
 }

 const thomsInventory = 
 thomsCloset[(0)] = 'Thom\'s shirts';
 thomsCloset[(1)] = 'Thom\'s pants';
 thomsCloset[(2)] = 'Thom\'s accessories';

 console.log(thomsInventory);