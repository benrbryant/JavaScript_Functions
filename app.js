// Exercise 1 Section
function printOdds(n){
    for(let i = 1; i <= n; i++){
        if (i % 2 !==0){
        console.log(i)
        }
    }
}

printOdds(10); // 1 3 5 7 9
printOdds(100); // 1 3 ... 99
printOdds(5); // 1 3 5


// Exercise 2 Section
function checkAge(age, name = "stranger") {
    if (!parseInt(age) && age !==0) {
        console.log("You dint give a valid age.");
    } else {
        console.log(
        `Sorry ${name}... you must wait ${16 - age} year(s) until you can drive.`
        );
    }
}


checkAge(21, "Ben");
checkAge(16, "Renzo");
checkAge(14);


// Exercise 3 Section
function locatePoint(x,y){
    if (y == 0 || x == 0) {
        // point is on an axis
        let axisLocation;

        if(y == 0 && x == 0){
            axisLocation = "both axes";
        } else if (x==0){
            axisLocation = "x axes";
        } else if (y == 0){
            axisLocation = "y axes";
        }

        console.log(`Point is on ${axisLocation}.`);
    } else {
        // determine what quadrant
        let quadrant = 4;

        if(x > 0 && y > 0) {
            // quad 1
            quadrant = 1;
        }  else if (x < 0 && y > 0) {
            // quad 2
            quadrant = 2;
        }  else if (x < 0 && y < 0){
            // quad 3
            quadrant = 3;
        }

        console.log(`Point is in quadrant ${quadrant}.`);
    }
}

locatePoint(0,1); // Point is on x axis
locatePoint(1,0); // Point is on y axis
locatePoint(0,0); // Point is on both axes
locatePoint(1,1); // Point is in quadrant 1
locatePoint(-1,1); // Point is in quadrant 2
locatePoint(-1,-1); // Point is in quadrant 3
locatePoint(1,-1); // Point is in quadrant 4


//Excercise 4
function describeTriangle(sideA, sideB, sideC){
    // Is  the triangle valid?
    if (sideA + sideB > sideC) {
            console.log("Valid triangle");
        // determine type of triangle
        if (sideA == sideB && sideA == sideC){
            console.log("Equilateral triangle");
        } else if (sideA == sideB || sideB == sideC || sideA == sideC) {
            console.log("Isosceles triangle");
        } else {
            console.log("Scale triangle");
        }
    } else {
            console.log("Invalid triangle");
    }
    }

describeTriangle(1,2,3);
describeTriangle(1,2,2);
describeTriangle(3,3,3);
describeTriangle(3,4,6);

//Exercise 5
const dataReport = (dataLimit, day, usage) => {
    const cycleLength = 30;
    let avgDailyUse = usage / day;
    let avgSuggestedUse = dataLimit / cycleLength;
    let estimatedUse = ((cycleLength - day) * avgDailyUse);
    let status;
    let feedback;

    if (avgDailyUse > avgSuggestedUse) {
        status = "EXCEEDING";
        feedback = `exceed your data plan by ${estimatedUse} GB.`;
    } else if (avgDailyUse < avgSuggestedUse) {
        status = "UNDER";
        feedback = `lose ${estimatedUse} GB`;
    } else {
        status = "ON TRACK WITH"
        feedback = `use all of your data`;
    }
    // usage / day == avrage daily usage
    // dataLimit / cycleLength == average daily cycle usage without running over
    //  ((cycleLength - day) * (usage / day)) - dataLimit 
    let output = `${day} day(s) used, ${cycleLength - day} 
    day(s) remaining. \n Average daily use: ${avgDailyUse.toFixed(2)} GB/day.\n You are ${status} your average daily use (${avgDailyUse.toFixed(2)} GB/day),
    continuing this usage rate, you'll ${feedback}.`;

    if (status !== "ON TRACK WITH"){
        let correctedDailyUse = (dataLimit - usage) / (cycleLength - day);
        output += `\n To use all of your data plan, use no more than ${correctedDailyUse} GB/day.`;
    }

    console.log(output);
};

dataReport(50, 5, 4);
dataReport(50, 15, 34);
dataReport(50, 15, 25);
