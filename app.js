// Chap 38 to 42
// Qno 1
function power(a, b) {
    if (b < 0) {
        a = 1 / a; 
        b = -b; 
    }
        var result = 1;

    for (var i = 0; i < b; i++) {
        result *= a;
    }

    return result;
}

var base = 2;
var exponent = -3;
var result = power(base, exponent); 
console.log(base + " raised to the power of " + exponent + " is: " + result); 

// Qno 2
function leapYear(year){
    if((year % 4 === 0 &&  year % 100  != 0) || (year % 400 === 0)){
        return true;
    }else{
        return false;
    }

}
var year = prompt("Enter a year to check if it's a leap year:");
if (leapYear(year)) {
    alert(year + " is a leap year.");
} else {
    alert(year + " is not a leap year.");
}

// Qno 4
function calculateAverage(marks1, marks2, marks3) {
    let average = (marks1 + marks2 + marks3) / 3;
    return average; 
}
function calculatePercentage(totalMarks, maxMarks) {
    let percentage = (totalMarks / maxMarks) * 100; 
    return percentage; 
}

function mainFunction(marks1, marks2, marks3) {
    var totalMarks = marks1 + marks2 + marks3;
    var maxMarks = 300;

    var average = calculateAverage(marks1, marks2, marks3);

    var percentage = calculatePercentage(totalMarks, maxMarks);

    console.log("Average Marks: " + average.toFixed(2));
    console.log("Percentage: " + percentage.toFixed(2) + "%");
}

var marks1 = +(prompt("Enter marks for subject 1:"));
var marks2 = +(prompt("Enter marks for subject 2:"));
var marks3 = +(prompt("Enter marks for subject 3:"));

mainFunction(marks1, marks2, marks3);

// Qno 5
function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

var myString = "JavaScript";
var searchChar = prompt("Enter the character you want to find in the string '" + myString + "':");

var result1 = customIndexOf(myString, searchChar);

if (result1 !== -1) {
    alert("Character found at index: " + result1);
} else {
    alert("Character not found.");
}


// Qno 7
function countSuccessiveVowels(text) {
    var count = 0; 

    for (var i = 0; i < text.length - 1; i++) {
        var char1 = text[i].toLowerCase();
        var char2 = text[i + 1].toLowerCase(); 

        switch (char1) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                switch (char2) {
                    case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u':
                        count++;
                        break;
                }
                break;
        }
    }

    return count;
}

var sentence = "Pleases read this application and give me gratuity";
var result = countSuccessiveVowels(sentence);

alert("Number of successive vowels: " + result);

// Qno 9
function calculateOvertimePay(hoursWorked) {
    var regularHours = 40; 
    var overtimeRate = 12.00;
    var overtimeHours = 0;
    var overtimePay = 0; 

    if (hoursWorked > regularHours) {
        overtimeHours = hoursWorked - regularHours; 
        overtimePay = overtimeHours * overtimeRate; 
    }

    return overtimePay; 
}

var hoursWorked = +(prompt("Enter the number of hours you worked:"));

if (hoursWorked > 0) {
    var overtimePay = calculateOvertimePay(hoursWorked);
    
    if (overtimePay > 0) {
        alert("Overtime pay is: Rs. " + overtimePay.toFixed(2));
    } else {
        alert("No overtime worked.");
    }
} else {
    alert("Please enter a valid number of hours.");
}

// Chap 43 to 48
// Qno 3
function deleteRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}









