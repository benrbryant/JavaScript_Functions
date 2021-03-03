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
2. The function should take in two parameter named `userName` & `age`
3. The function body should:
   - declare and initialize an `aboveSixteen` local variable with string value: `"Congrats ${name}, you can drive!"`,
   - declare and initialize an `belowSixteen` local variable with string value: `"Sorry ${userName}, but you need to wait until you're 16."`,
   - an `if/else` statement that determines if the `age` value is below 16,
   - and then `console.log()` the correct message to the console.
4. BONUS: Remember that parameters are optional, and no `userName` or `age` value could be passed in. Correctly account for no parameter being passed in.

## More Practice

- Assign a function to a variable
- Pass a function as a parameter(argument)
- Return a function from a function
