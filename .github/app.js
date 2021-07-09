//  Easy Going

for(let num = 0; num <= 20; num++) {
    console.log(num);
}

//  Get Even

for (let num = 0; num <= 200; num+=2) {
    console.log(num);
}

//  Excited Kitten

let myCat = 'Love me, pet me! HSSSSSS!';

for(let i = 0; i < 20; i++){
    console.log(myCat); 
} 

const catTalk = ['...human...why you taking pictures of me?...', 
'...the catnip made me do it...',
'..why does the red dot always get away'
];
const random = Math.floor(Math.random() * catTalk.length);

for(let i = 0; i < 20; i+=2) {
    console.log(catTalk);
}