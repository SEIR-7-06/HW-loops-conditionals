/* Cody Tsao
SEI 7.06
Deliverable 2: Loops Conditionals Arrays 
*/

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

// 4
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];
/* 1 */
kenny[0] = "Gameboy"
/* 2 */
jimClark[1]+=1 
/* 3 */
ryan[2] = "Gotham City"
/* 4 */
/* Instructions here say
"Reuben left Durham 5 years ago to come to Chicago.
First, remove "Durham" from Reuben's array, and then add "Chicago".
(Note: remove and then add is different from simply changing the value at that index.)" 
Nothing else to do?*/
reuben.pop()
reuben.push('Chicago')
/* 5 */
jimHaff.pop()
jimHaff.push('Taipei', 'Taichung', 'Paris')
/* bonus */
jimHaff.splice(2,1,'')

//5
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for (let i = 0; i <ninjaTurtles.length; i++)
{
    console.log(ninjaTurtles[i].toUpperCase())
}
/* bonus */
const newString = ["","","",""]
const ninTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for (let i = 0; i< ninTurtles.length; i++)
{    
    for (let k = 0; k < ninTurtles[i].length; k++)
    {
        if (k%2 === 0)
        {
            newString[i]+= ninTurtles[i][k].toUpperCase()
        }
        else
        {
            newString[i]+=( ninTurtles[i][k] )
        }
            
    }    
    console.log(newString[i])
}






