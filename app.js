//Easy Going Question 1
/*for (let i= 0; i<=20; i++) {
    console.log(i);
}


//Get Even Question 1
for (let i = 0; i <= 200; i+=2) {
    console.log(i);
}

//Excited Kitten Question 1
for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! Hssss!");
}*/

//Excited Kitten Question 2
let catStatements = [
    "human, why you taking pictures of me?", 
    "the catnip made me do it", 
    "why does the red dot always get away"];

let catSays = catStatements[Math.floor(Math.random()*3)];

let i;
for (i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        console.log(catSays);
    }
}
