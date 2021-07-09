// for(i = 1; i <=20; i++){
//     console.log(i);
// }

// for(i = 0; i <= 200; i +=2){
//     console.log(i);
// }

// randomKitty = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..." ]

// let excitedKitty = "";

// for(i = 0; i < 20; i++){
//         if(i % 2 === 0){
//             console.log(excitedKitty);
//         }else{
//             console.log("Love me, pet me! HSSSSSS!");
//         }
//    excitedKitty = randomKitty[Math.floor(Math.random() * 3)];
//}

// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];

// kenny[0] = "Gameboy";
// jimClark[1] = 187;
// ryan[2] = "Gotham City";
// reuben.splice(2, 1, "Chicago");
// jimHaff.pop();
// jimHaff.push("San Francisco", "Chicago", "Houston");
// jimHaff.splice(2, 1);
// console.log(kenny, jimClark, reuben, jimHaff, ryan);

// let ninjaTurtles = ["Donatello", "Leonardo", "Michaelangelo", "Rafael"];

// for(let i = 0; i < ninjaTurtles.length; i++){
//     let yell = ninjaTurtles[i].toUpperCase();
//     console.log(yell + "!");
// }

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

  krystnsShoe = kristynsCloset.splice(0,1).toString();
thomsCloset[2].push(krystnsShoe);
console.log(thomsCloset[2]);