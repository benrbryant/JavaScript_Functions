console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  for (let i = 0; i <= count; i++) {
    if (count < 0) count = count * -1; // BONUS: Accounts for negative count
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age) {
  const aboveSixteen = "You can drive!";
  const belowSixteen = "Sorry, but you need to wait until you're 16.";
  if (age >= 16) {
    console.log(aboveSixteen);
  } else {
    console.log(belowSixteen);
  }
}
