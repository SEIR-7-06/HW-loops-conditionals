
// EASY GOING
// Write a for loop that will log the numbers 1 through 20.

let num = 0;
while (num < 20) {
    console.log(num +=1)
}

// GET EVEN
// Write a for loop that will log only the even numbers in 0 through 200.


let num2 = 0;
    while (num2 < 200) {
        console.log(num2 +=2)
    }

// EXCITED KITTEN
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

for (let i = 0; i < 20; i++) {
    console.log ("Love me, pet me! HSSSSSS")
}

// 2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

let kitty = [
    "...human...why you taking pictures of me?...",
    "...the catnip made me do it...",
    "...why does the red dot always get away..."
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  for (let i = 0; i < 20; i++) {
      if (i % 2 === 0) {
          console.log(kitty[getRandomInt(3)])
      } else {
          console.log("Love me, pet me! HSSSSSS")
      }
  }