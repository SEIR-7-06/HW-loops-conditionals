// Easy going //

// for (i =0; i<=20; i++){
//     console.log(i)
// }

// Get Even //

// for (i = 0; i <= 200; i++){
//     console.log(i)
// }

// Excited Kitten //


// let hiveMind = ['...human...why you taking pictures of me?...',
// '...the catnip made me do it...', 
// '...why does the red dot always get away...'];
// let meow = hiveMind[Math.floor(Math.random() * hiveMind.length)];

    
//     for (let affection = 0; affection < 20; affection++){
//         if ( affection % 2 == 0){
//             console.log("Love me, pet me! HSSSSSS!");
//         } else { 
//             console.log(meow);
//         }
// }

// Working with arrays //

// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];

// kenny [0] = 'Gameboy';
// kenny [0] = 'Gameboy';
// jimClark.splice(1, 1, 187)
// ryan [2] = 'Gotham City';
// reuben.pop();
// reuben.push([2], 'Chicago')
// jimHaff.splice(2, 2, 'NY', 'Boston', 'Chicago');
// jimHaff.splice(2, 1 )

// console.log( kenny, jimHaff, reuben, jimClark, ryan);

// Yell at the Ninja Turtles //

// const turtlePower = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// for (let halfShell = 0; halfShell < turtlePower.length; halfShell++){
//     turtlePower[halfShell] = turtlePower[halfShell].toUpperCase();
// if (halfShell % 2 == 1) {
//     turtlePower[halfShell] = turtlePower[halfShell].toLowerCase();
// }
// console.log(turtlePower[halfShell])
// }

// Return of the Closets //

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
  
// let kristynsShoe = kristynsCloset.shift();
// thomsCloset[2].push(kristynsShoe);
// console.log(thomsCloset)


// krisFitOne = []
// for (let i = 1; i <=3;){
//     let fate = (Math.floor(Math.random() * 6))
//     krisFitOne.push(kristynsCloset[fate]);
//     i = i + 1;
// }
// console.log('Kristyn will wear ' + krisFitOne) 

// krisFitTwo = []
// for (let i = 1; i <=3;){
//     let fate = (Math.floor(Math.random() * 6))
//     krisFitTwo.push(kristynsCloset[fate]);
//     i = i + 1;
// }
// console.log('Kristyn will wear ' + krisFitTwo)

// krisFitThree = []
// for (let i = 1; i <=3;){
//     let fate = (Math.floor(Math.random() * 6))
//     krisFitThree.push(kristynsCloset[fate]);
//     i = i + 1;
// }
// console.log('Kristyn will wear ' + krisFitThree)


// thomFitOne = []
// for (let i = 0; i < thomsCloset.length; i++){
//     let fate = (Math.floor(Math.random() * thomsCloset.length));
//     thomFitOne.push(thomsCloset[i][fate])
//     console.log("Thom will wear " + thomFitOne)
// }

// thomFitTwo = []
// for (let i = 0; i < thomsCloset.length; i++){
//     let fate = (Math.floor(Math.random() * thomsCloset.length));
//     thomFitTwo.push(thomsCloset[i][fate])
//     console.log("Thom will wear " + thomFitTwo)
// }

// thomFitThree = []
// for (let i = 0; i < thomsCloset.length; i++){
//     let fate = (Math.floor(Math.random() * thomsCloset.length));
//     thomFitThree.push(thomsCloset[i][fate])
//     console.log("Thom will wear " + thomFitThree)
// }
// I borrowed code from Greg for this one. He is a very skilled at coding. 

for (let i = 0; i < kristynsCloset.length; i++){
    console.log('WHIRR: Now washing ' + kristynsCloset[i])
}

for (let i = 0; i < thomsCloset.length; i++){
    console.log(thomsCloset[i])
}