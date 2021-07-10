// This is just a test.

// Easy Going

for (let i = 1; i < 21; i++) {
    console.log(i);
}

// Get Even

for (i = 0; i< 201; i+=2) {
    console.log(i);
}

// Excited Kitten

for (let i = 1; i < 21; i++) {
    console.log("Love me, pet me!  HSSSSSS!");
    if (i % 2 == 0) {
        let value = Math.floor(Math.random() * 3);
        if (value == 0) {
            console.log("...human...why you taking pictures of me?...");
        } else if (value == 1) {
            console.log("...the catnip made me do it...");
        } else {
            console.log("...why does the red dot always get away...");
        }
    }
}