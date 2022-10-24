console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// function printOdds(count){
//     if(count>=0){
//     for(let i=0;i<=count;i++){
//             if (i%2==1)
//             console.log(i);
//         }
//     }
//     else if (count<0)
//     console.log(`Negative count pass in ${count}`);
//     { for(i=0;i>=count;i--)
//        {  if(i%2== -1)
//             {
//                 console.log(i);
//             }
//        }

//     }
// };
function printOdds(count){
    let sign=1;
    if(count<0){
        sign=-1;
    }
    for(let i=0;i<=count*sign;i++){
            if (i%2==1)
            console.log(i*sign);
        }
    }


printOdds(-20);
printOdds(+14);
// printOdds(+114);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
// function gitName and age()
const gitName=(userName, age)=>{
   userName=prompt("what is your name?");
   age=parseInt(prompt("How old are you" ));
  let aboveSixteen=`Congrats ${userName},you can drive`;
let belowSixteen=`Sorry ${userName},you need to wait until you're 16`;
if (age>=16){
    console.log(aboveSixteen);
}else if (age<16){
    console.log(belowSixteen);
}else{
    console.log("wrong input");
}

};
gitName();
// function checkAge (userName , age ){
// let aboveSixteen=`Congrats ${userName},you can drive`;
// let belowSixteen=`Sorry ${userName},you need to wait until you're 16`;
// if (age>=16){
//     console.log(aboveSixteen);
// }else if (age<16){
//     console.log(belowSixteen);
// }
// };
// let name = prompt("what is your name?");
// let age = parseInt(prompt("what is your age?"));
// if(!isNaN(age)){
//     checkAge(name,age);
// }else{
//     return`wront age input`;
// }

// checkAge("aman",15);
// checkAge("abdullah",18);


console.log("EXERCISE 3:\n==========\n");
function quadrant( x, y)              
{ if (x > 0 && y > 0)
        {console.log( `(${x},${y})Is in the 1st quadrant`); }
 
    else if (x < 0 && y > 0)
        {console.log(`(${x},${y})is in the 2nd quadrant`);
 }
    else if (x < 0 && y < 0)
        {console.log( `(${x},${y})is in 3rd quadrant`); }
 
    else if (x > 0 && y < 0)
        {console.log( `(${x},${y})Is in 4th quadrant`); }
 
    else if (x == 0 && y > 0)
        {console.log( `(${x},${y})Is at positive y axis`);}
 
    else if (x == 0 && y < 0)
        {console.log( `(${x},${y})Is at negative y axis`);}
 
    else if (y == 0 && x < 0)
        {console.log( `(${x},${y})Is at negative x axis`);}
 
    else if (y == 0 && x > 0)
       { console.log( `( ${x},${y} ) Is at positive x axis`);}
 
    else if (x==0 && y==0)
    { console.log(`(${x},${y}) Is at origin` ); }
};

quadrant(0,0);         
quadrant(2,3);
quadrant(-1,3);
quadrant(-21,-1);
quadrant(2,-12);
quadrant(0,2);
quadrant(0,-22);
quadrant(-14,0);
quadrant(12,2);

// equilateral: all side lengths equal,
//  isosceles: only two side lengths equal
//  scalene: all different side lengths
console.log("EXERCISE 4:\n==========\n");
  const isValid= (a,b,c)=>
{ return a+b>c && b+c>a && a+c>b;
};
 function trianglType(a,b,c){
        let valid=isValid(a,b,c);

        if(valid){
              if (a==b&&b==c)
        {
            console.log("equilateral");
        }
              else if (a==b || b==c || a==c)
        {
            console.log("isosceles");
        }
             else if (a!==b && b!==c)
        {
            console.log("scalene");
        }
      }else  {console.log("Not a valid triangle   ");}
                            };
                            trianglType(1,2,5);
                            trianglType(1,1,1);
                            trianglType(2,2,3);
                            trianglType(1,2,3);
// Type of Triangle
// equilateral: all side lengths equal
// isosceles: only two side lengths equal
// scalene: all different side lengths

// const isValidTriangle = (a, b, c) => {
//     return a + b > c && a + c > b && b + c > a;
//   };
  
//   const determineTriangle = (a, b, c) => {
//     let isValid = isValidTriangle(a, b, c); 
  
//     if (isValid) {
//       if (a == b && b == c) {
//         // all sides the same
//         return `Equilateral`;
//       } else if (a == b || b == c || a == c) {
//         // two sides the same
//         return `Isosceles`;
//       } else {
//         return `Scalene`;
//       }
//     } else {
//       return `Not a valid triangle`;
//     }
//   };
  
//   console.log(determineTriangle(1, 1, 2)); 
//   console.log(determineTriangle(2, 2, 1)); 
//   console.log(determineTriangle(3, 3, 3)); 



console.log("EXERCISE 5:\n==========\n");

// 30 day cycles, no-rollover
// planLimit: 100, day: 15, usage: 56
// 1. 15 days used, 15 days remaining
// 2. Average daily use: 3.333 GB/day
// 3. You are EXCEEDING your average daily use (3.73 GB/day),
// continuing this high usage, you'll exceed your data plan by
// 11.9 GB.
// 4. To stay below your data plan, use no more than 2.93 GB/day.
const getNumberToFixed = (num, decimalPlace) => {
    return parseFloat(num.toFixed(decimalPlace));
  };
  
  const getAvg = (total, length) => {
    return getNumberToFixed(total / length);
  };
  
  const getUsageFeedback = (planLimit, days, usage) => {
    const cycleLength = 30;
    const projectedAvg = getAvg(planLimit, cycleLength);
    const currentAvg = getAvg(usage, days);
    const projectedUsage = currentAvg * cycleLength;
    const adjustedAvg = getAvg(planLimit - usage, cycleLength - days);
  
    let output = `${days} days used, ${cycleLength - days} days remaining
    Suggested daily use: ${projectedAvg} GB/day
    `;
  
    if (currentAvg > projectedAvg) {
      output += `You are EXCEEDING your average daily use (${currentAvg} GB/day),
      continuing this high usage, you'll exceed your data plan by
      ${projectedUsage - planLimit} GB.
      To stay below your data plan, use no more than ${adjustedAvg} GB/day.`;
    } else if (currentAvg < projectedAvg) {
      output += `You are UNDER your average daily use (${currentAvg} GB/day),
      continuing this low usage, you'll lose out on ${Math.abs(
        projectedUsage - planLimit
      )} GB.
      To stay use all of your data plan, use on average ${adjustedAvg} GB/day.`;
    } else {
      output += `You are AT your average daily use (${currentAvg} GB/day).`;
    }
  
    console.log(output);
  };
  
  getUsageFeedback(100, 15, 56);