# JavaScript Functions

## Getting Started

1. Open your command line and navigate to your `repos` directory (if you do not have a `repos` folder, then you can use `mkdir repos` to create one)
2. Use this template repository to start a new project in your repos folder: `git clone <repo_name>`
3. cd `repo_name` to navigate into your new repo directory
4. Start Visual Studio Code and select 'Open Folder'. Then select `repo_name` to open the folder in the editor (or just type `code .` in your terminal inside the repo directory)
5. Follow the instructions on the README.md file to complete exercises
6. Open the app.js file to get started

## Exercise 1: Minimum Number

- In the past, we created a selection statement inside a loop that counted from 1 to 100, and only printed out the odd numbers.
- Your task is to write a function printOdds() that takes one parameter, count, and uses a loop and selection statement to count to the number passed in, printing out the odd numbers.

1. Declare a function named `printOdds` using declaration notation (`function <name>(){...}`)
2. The function should take in one parameter named `count`
3. The function body should:
   - contain a `for loop` that counts to the parameter passed in,
   - an `if/else` statement that determines if the current value is odd,
   - and then `console.log()` the odd value to the console
4. BONUS: Now that you do not know exactly what number may be passed in as `count`, use an `if` statement to account for a negative `count` being passed in.

## Exercise 2: Legal?

- Write a function that receives a name and age, and prints a greeting message to the console using the name.

1. Declare a function named `checkAge` using declaration notation (`function <name>(){...}`)
2. The function should take in two-parameters named userName & age
3. The function body should:
   - declare and initialize an aboveSixteen local variable with string value: "Congrats ${userName}, you can drive!",
   - declare and initialize an belowSixteen local variable with string value: "Sorry ${userName}, but you need to wait until you're 16.",
   - an `if/else` statement that determines if the `age` value is below 16,
   - and then `console.log()` the correct message to the console.
4. BONUS: Remember that paramaters are optional, and no `name` or `age` value could be passed in. Correctly account for no parameter being passed in.

## Exercise 3: Which Quadrant?

Write a function that receives two parameters, x and y coordinates in
the Cartesian plane, and prints out a message indicating if the point (x, y) lies on either the x or y axis,
 or what quadrant the point lies in.

 For example:

 - (0, 2) is on the x axis
 - (1, 2) is in Quadrant 1
 - (-6, 18) is in Quadrant 2

## Exercise 4: What type of triangle?

Write a function that receives three numbers that represent the lengths of a triangles three sides. If the three
sides do not form a valid triangle (the sum of two sides should always be greater than the length of the third side),
 you should return a message indicating an invalid triangle. Otherwise, return a string indicating the type of triangle
the three sides make (equilateral: all side lengths equal, isosceles: only two side lengths equal, or scalene: all different side lengths).

For example:

- Sides 1, 2, 2 make an isosceles triangle
- Sides 1, 1, 2 make an invalid triangle

## Exercise 5: Data Plan Status

Write a function that will display feedback on cell phone data usage. Cell phone
plans for this particular company give you a certain amount of data every 30 days
which must be used or they are lost (no rollover). We want to track the average amount of data
 used per day and inform the user if they are using too much data or can
afford to use more.

Write a function that accepts the following parameters:

- `planLimit`: amount of data in the plan per 30 day period
- `day`: the current day in the 30 day period
- `usage`: the total amount of data used so far

The function should compute whether the user is over, under, or right on the average
daily usage under the plan. It should also inform them of how much data is left
and how much, on average, they can use per day for the rest of the month. If
they’ve run out of data, it should inform them of that too.

For example, if the user enters `planLimit = 100`, `day = 15`, and `usage = 56`, your program should print
out something similar to the following.

```txt
15 days used, 15 days remaining
Average daily use: 3.333 GB/day
You are EXCEEDING your average daily use (3.73 GB/day),
continuing this high usage, you'll exceed your data plan by
11.9 GB.
To stay below your data plan, use no more than 2.93 GB/day.
```

