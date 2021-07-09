// Easy Going

// for (let i = 1; i <= 20; i++) {
//     console.log(i)
// }

// Get Even

// for (let i = 0; i <= 200; i += 2) {
//     console.log(i)
// }

// Excited Kitten

const questions = [
    "Human, why are you taking pictures of me?",
    "The catnip made me do it!",
    "Why does the red dot always get away?!"
]

for (let i = 0; i < 20; i ++){
    if (i % 2 == 0) {
        let num = Math.floor(Math.random()*questions.length)
        console.log(questions[num])
    }
    else {
        console.log("Love me, pet me! HSSSSSS!")
    }
}
