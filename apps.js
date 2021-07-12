// Easy going //

// for (i =0; i<=20; i++){
//     console.log(i)
// }

// Get Even //

// for (i = 0; i <= 200; i++){
//     console.log(i)
// }

// Excited Kitten //


let hiveMind = ['...human...why you taking pictures of me?...',
'...the catnip made me do it...', 
'...why does the red dot always get away...'];
let meow = hiveMind[Math.floor(Math.random() * hiveMind.length)];

// for (affection = 0; affection <= 20; affection++){
    //     console.log("Love me, pet me! HSSSSSS!")
    // }
    
    for (let affection = 0; affection < 20; affection++){
        if ( affection % 2 == 0){
            console.log("Love me, pet me! HSSSSSS!");
        } else { 
            console.log(meow);
        }
}
