///////QUESTION 1////////////
// for(i = 1; i <=20; i++){
//     console.log(i)
// }
///////QUESTION 2////////////
// for(i = 0; i <=200; i+=2){
//     console.log(i)
// }
///////QUESTION 3////////////
// for(i = 1; i <=20; i++){
//     console.log("Love me, pet me! HSSSSSS!")
// }
///////QUESTION 4.1////////////
// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];

// kenny.splice(0,1,"Gameboy");
// console.log(kenny);

//QUESTION 4.2

// jimClark[1] = jimClark[1]+1;
// console.log(jimClark);

//QUESTION 4.3
// ryan.splice(2, 1, "Gotham City")
// console.log(ryan);

//QUESTION 4.4
// reuben.pop("Durham");
// console.log(reuben);

// reuben.push("Chicago")
// console.log(reuben);

//QUESTION 4.5
// jimHaff.splice(2, 1, "Houston" , "Springfield" , "Boise")
// console.log(jimHaff);

//QUESTION 4.6 BONUS
// jimHaff.splice(2, 1, 0)
// console.log(jimHaff);

///////QUESTION 5.1////////////

let ninjaTurtles = ["Donatello", "Leonardo" , "Raphael" , "Michaelangelo"];

///////QUESTION 5.2////////////
// for (i = 0; i < ninjaTurtles.length; i++){ 
//     console.log(ninjaTurtles[i].toUpperCase());
// }

///////QUESTION 5.3 BONUS////////////
// for (i = 0; i < ninjaTurtles.length; i++){ 
//     let turtleSplit = ninjaTurtles[i].split("");

//     for (j = 0; j < ninjaTurtles[i].length; j +=2){
//        turtleSplit[j] = turtleSplit[j].toUpperCase("");
//     }
//     console.log(turtleSplit.join(""))
// }
///MEGAN AND KENNY ARE RESPONSIBLE I DID NOTHING AT ALL WHATSOEVER EXCEPT CRY//

///////QUESTION 6.1////////////


let kristynsCloset = [
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

//   let kristynsShoe = "left shoe"
//   thomsCloset[2].push(kristynsShoe);
//   console.log(thomsCloset)

  ///////QUESTION 6.2////////////

  console.log(kristynsCloset [1]+ " " + kristynsCloset[3]+ " " +kristynsCloset[4])

   console.log(thomsCloset[0][2] +", "+ thomsCloset[1][1] +", "+  thomsCloset[2][2])
