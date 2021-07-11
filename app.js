// // Easy Going

// for (let i = 1; i <= 20; i++) {
//     console.log(i)
// }


// // Get Even

// for (let i = 0; i <= 200; i += 2) {
//     console.log(i)
// }


// // Excited Kitten

// const questions = [
//     "Human, why are you taking pictures of me?",
//     "The catnip made me do it!",
//     "Why does the red dot always get away?!"
// ]

// for (let i = 0; i < 20; i ++){
//     if (i % 2 == 0) {
//         let num = Math.floor(Math.random()*questions.length)
//         console.log(questions[num])
//     }
//     else {
//         console.log("Love me, pet me! HSSSSSS!")
//     }
// }

// // Working with Arrays - Getting to Know You

// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];

// // 1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny" from the kenny array and replace it with "Gameboy".
// kenny[0] = 'Gameboy'
// console.log(kenny)

// // 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard code 187--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.
// jimClark[1] = jimClark[1] += 1
// console.log(jimClark)

// // 3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
// ryan[2] = 'Gotham City'
// console.log(ryan)

// // 4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
// reuben.splice(2)
// reuben.splice(2, 0, 'Chicago')
// console.log(reuben)

// // 5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
// jimHaff.splice(2, 1, 'Portland', 'DC', 'Charleston')
// console.log(jimHaff)

// // 6. Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim Haff is now, remove it from the array using .splice()
// jimHaff.splice(2, 1)
// console.log(jimHaff)

const ninjaTurtles = [
    'Donatello',
    'Leonardo',
    'Raphael',
    'Michaelangelo'
]

for (let i = 0; i < ninjaTurtles.length; i++) {
    console.log(ninjaTurtles[i].toUpperCase())
}

for (let i = 0; i < ninjaTurtles.length; i++) {
    ninjaTurtles[i] = ninjaTurtles[i].split("")
        for (let j = 0; j < ninjaTurtles[i].length; j += 2) {
        ninjaTurtles[i][j] = ninjaTurtles[i][j].toUpperCase("")
        }
    console.log(ninjaTurtles[i].join(''))
}