// HW: Arrays, Loops, and Conditional Reps

//////////////////////////////////////////
// Easy Going

for (i=1; i<=20; i++) {
    console.log(i);
}

/////////////////////////////////////////
// Get Even

for (i=0; i<=200; i+=2) {
    console.log(i);
}

/////////////////////////////////////////
// Excited Kitten

for (i=1; i<=20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
    if (i%2==0) {
        const catArray = ["... human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
        console.log(catArray[Math.floor(Math.random() * 3)]);
    };   
}

/////////////////////////////////////////
// Working with Arrays