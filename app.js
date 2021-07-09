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
        rando= Math.floor(Math.random()*2)
        console.log(reaction[rando])
    }
    console.log("Love me, pet me! HSSSSSS!")
}
