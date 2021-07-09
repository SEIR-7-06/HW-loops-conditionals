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

//6 
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  /* 1 */
  let kristynsShoe = kristynsCloset.shift()
  
 
  /* 2 */
  for (let i = 0; i<3; i++)
  {
      const outfits = []
      for (let k = 0; k <3; k++)
      { 
        let randNumber =  Math.floor( Math.random() * kristynsCloset.length)
        outfits.push(kristynsCloset.splice(randNumber, 1) ) 
      }
      console.log("Outfit " + (i+1) + " for Kristyen is " + outfits)
      while (outfits.length != 0)
      {
        kristynsCloset.push(outfits.pop())
      }
  } 

  for (let i = 0; i <3; i++)
  {
    const thomsOutfit = []
    for (let k = 0; k < 3; k++)
    {
      let randNumber = Math.floor (Math.random() * thomsCloset[k].length)
      thomsOutfit.push( thomsCloset[k][randNumber])
    }
    console.log("Outfit " + (i+1) + " for Thom is " + thomsOutfit)
    for (let k = 2; k!=0 ; k--)
    {
      thomsCloset[k].push(thomsOutfit.pop())
    }
  }

  //7
  /* 1 */
  console.log("Washing Kristyn's Clothes")
 for (let i =0; i < kristynsCloset.length; i++)    
 {
   console.log("WHIRR: Now washing " + kristynsCloset[i])
 }
/* 2 */
console.log("Creating an Inventory of Thom's Clothes")
for (let i = 0; i <thomsCloset.length; i++)
{
  console.log(thomsCloset[i])
}

// Fizz Buzz
for (let i = 0; i <=100; i++)
{
  if ( (i %3 === 0) && (i % 5 === 0))
  {
    console.log("FizzBuzz")
  }
  else if (i%3 === 0)
  {
    console.log("Fizz")
  }
  else if ( i % 5 === 0)
  {
    console.log("Buzz")
  }
  else
  {
    console.log(i)
  }
}
//Multiples of 3 and 5
let sum = 0
for (let i = 1; i < 1000; i++)
{
  if (i % 3 === 0 || i % 5 === 0)
  {
    sum+=i
  }  
}
console.log(sum)





