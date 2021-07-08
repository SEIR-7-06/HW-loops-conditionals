console.log('test')
// 1
for (let i = 1; i <= 20; i++)
{  
    console.log(i)
}
// 2
for (let i = 0; i <= 200; i+=2)
{
    console.log(i)
}
// 3
for (let i =0; i<20; i++)
{
    let arr = 
        ["...human...why you taking pictures of me?...",
         "...the catnip made me do it...",  
         "...why does the red dot always get away..."]
    console.log('Love me, pet me! HSSSSSS!')
    if (i%2 ===0)
    {
        console.log(arr[Math.floor(Math.random() * arr.length) ] )
    }
}