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


//Yell at the Ninja Turtles
let team = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for(let i=0; i<team.length; i++){
    if(i % 2 === 0){
        team[i] = team[i].toUpperCase();
        console.log(team[i]);
    }
    else{
        team[i] = team[i].toLowerCase();
        console.log(team[i]);
    }

}


// Return of the Closets
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
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

  //Alien Attire
  let kristynsShoe = kristynsCloset[0];
  kristynsCloset.shift();

  kristynOutfit = [kristynsCloset[0],kristynsCloset[2],kristynsCloset[3]]
  ThomsOutfit1 = []
  ThomsOutfit2 = []
  ThomsOutfit1.push(thomsCloset[0][1]);
  ThomsOutfit1.push(thomsCloset[1][0]);
  ThomsOutfit1.push(thomsCloset[2][2]);
  ThomsOutfit2.push(thomsCloset[0][3]);
  ThomsOutfit2.push(thomsCloset[1][2]);
  ThomsOutfit2.push(thomsCloset[2][0]);
  
  function outfitChoice(a){
      return `${a[0]}, ${a[1]} and ${a[2]} as an outfit`
  }
console.log('Kristyn chose ' + outfitChoice(kristynOutfit))
console.log('Thom chose ' + outfitChoice(ThomsOutfit1))
console.log('Thom chose ' + outfitChoice(ThomsOutfit2))

//Dirty Laundry
for(let i=0; i<kristynsCloset.length; i++){
    console.log("WHIRR: Now washing " + kristynsCloset[i])
}

// Not quite sure what this last question means.