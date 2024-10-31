// PDF 38-42
// Question no # 01

// function power(a, b) {
//     let result = 1;
    
    
//     const isNegative = b < 0;
//     b = Math.abs(b); 

//     for (let i = 0; i < b; i++) {
//         result *= a; 
//     }
    
 
//     return isNegative ? 1 / result : result;
// }


// console.log(power(2, 3));  
// console.log(power(3, 4));  
// console.log(power(2, -2)); 

// Question no # 02
// function isLeapYear(year) {
    
//     if (year % 4 === 0) {
      
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return true;
//             } else {
//                 return false; 
//             }
//         } else {
//             return true; 
//         }
//     } else {
//         return false; 
//     }
// }


// const year = prompt("Enter a year:");
// if (isLeapYear(parseInt(year))) {
//     console.log(`${year} is a leap year.`);
// } else {
//     console.log(`${year} is not a leap year.`);
// }

// Question no # 03


// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }


// function calculateArea(a, b, c) {
   
//     const S = calculateSemiPerimeter(a, b, c);
  
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }


// const sideA = parseFloat(prompt("Enter the length of side a:"));
// const sideB = parseFloat(prompt("Enter the length of side b:"));
// const sideC = parseFloat(prompt("Enter the length of side c:"));


// if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
//     const area = calculateArea(sideA, sideB, sideC);
//     console.log(`The area of the triangle is: ${area.toFixed(2)}`);
// } else {
//     console.log("The given sides do not form a triangle.");
// }


// // Question no # 04

// function calculateAverage(marks) {
//     const total = marks.reduce((acc, mark) => acc + mark, 0); 
//     return total / marks.length; 
// }


// function calculatePercentage(marks) {
//     const total = marks.reduce((acc, mark) => acc + mark, 0); 
//     return (total / (marks.length * 100)) * 100; 
// }


// function mainFunction() {
    
//     const marks = [];
//     for (let i = 1; i <= 3; i++) {
//         const mark = parseFloat(prompt(`Enter marks for subject ${i}:`));
//         marks.push(mark);
//     }

//     const average = calculateAverage(marks);
//     const percentage = calculatePercentage(marks);

//     console.log(`Average Marks: ${average.toFixed(2)}`);
//     console.log(`Percentage: ${percentage.toFixed(2)}%`);
// }

// mainFunction();


// Question no # 05

// function customIndexOf(str, char) {

//     if (char.length !== 1) {
//         throw new Error("Please provide a single character to search for.");
//     }
    
   
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
    
//     return -1;
// }

// const stringToSearch = "Hello, World!";
// const charToFind = "W";
// const index = customIndexOf(stringToSearch, charToFind);

// if (index !== -1) {
//     console.log(`Character '${charToFind}' found at index: ${index}`);
// } else {
//     console.log(`Character '${charToFind}' not found.`);
// }


// // Question no # 06

// function removeVowels(sentence) {
 
//     if (sentence.length > 25) {
//         throw new Error("The sentence should not be more than 25 characters long.");
//     }

  
//     const vowels = /[aeiouAEIOU]/g;

   
//     const result = sentence.replace(vowels, '');

//     return result;
// }

// const inputSentence = "Hello, how are you doing today?";
// const modifiedSentence = removeVowels(inputSentence);

// console.log(`Original Sentence: ${inputSentence}`);
// console.log(`Modified Sentence: ${modifiedSentence}`);

// Question no #07

// function countConsecutiveVowels(text) {
   
//     text = text.toLowerCase();

    
//     let count = 0;


//     for (let i = 0; i < text.length - 1; i++) {
//         const pair = text[i] + text[i + 1]; 

//         switch (pair) {
//             case 'aa':
//             case 'ae':
//             case 'ai':
//             case 'ao':
//             case 'au':
//             case 'ea':
//             case 'ee':
//             case 'ei':
//             case 'eo':
//             case 'eu':
//             case 'ia':
//             case 'ie':
//             case 'ii':
//             case 'io':
//             case 'iu':
//             case 'oa':
//             case 'oe':
//             case 'oi':
//             case 'oo':
//             case 'ou':
//             case 'ua':
//             case 'ue':
//             case 'ui':
//             case 'uo':
//             case 'uu':
//                 count++; 
//                 break;
//             default:
//                 break; 
//         }
//     }

//     return count; 
// }


// const inputText = "Pleases read this application and give me gratuity";
// const occurrences = countConsecutiveVowels(inputText);

// console.log(`The number of occurrences of two consecutive vowels: ${occurrences}`);

// Question no #08
// function kilometersToMeters(kilometers) {
//     return kilometers * 1000;
// }

// function kilometersToFeet(kilometers) {
//     return kilometers * 3280.84; 
// }

// function kilometersToInches(kilometers) {
//     return kilometers * 39370.1; 
// }

// function kilometersToCentimeters(kilometers) {
//     return kilometers * 100000; 
// }

// function main() {
//     const kilometers = parseFloat(prompt("Enter the distance in kilometers:")); // Get user input

//     if (isNaN(kilometers) || kilometers < 0) {
//         console.log("Please enter a valid distance.");
//         return;
//     }

   
//     const meters = kilometersToMeters(kilometers);
//     const feet = kilometersToFeet(kilometers);
//     const inches = kilometersToInches(kilometers);
//     const centimeters = kilometersToCentimeters(kilometers);

    
//     console.log(`${kilometers} kilometers is equal to:`);
//     console.log(`${meters} meters`);
//     console.log(`${feet} feet`);
//     console.log(`${inches} inches`);
//     console.log(`${centimeters} centimeters`);
// }

// main();

// Question no #09





// Question no #10



        // function calculateNotes(amount) {
           
        //     const denominations = [100, 50, 10];
        //     const notesCount = [0, 0, 0]; 
            
        //     for (let i = 0; i < denominations.length; i++) {
        //         if (amount >= denominations[i]) {
        //             notesCount[i] = Math.floor(amount / denominations[i]);
        //             amount %= denominations[i]; 
        //         }
        //     }
        //     return notesCount;
        // }

        // function main() {
        //     const amount = parseInt(prompt("Enter the amount to be withdrawn (in hundreds):"));

           
        //     if (isNaN(amount) || amount <= 0) {
        //         alert("Please enter a valid positive amount.");
        //         return;
        //     }

        //     const notesCount = calculateNotes(amount);

           
        //     alert(`For the amount ${amount}:\n` +
        //           `100s: ${notesCount[0]}\n` +
        //           `50s: ${notesCount[1]}\n` +
        //           `10s: ${notesCount[2]}`);
        // }

        
        // main();
  


// // PDF 43-48
// Question no #01



        // function showAlert() {
        //     alert("This is an alert box!");
        // }

       
        // document.getElementById("alertLink").addEventListener("click", function(event) {
        //     event.preventDefault(); 
        //     showAlert(); 
        // });
    
 // Question no #02

    
        // function showAlert(mobileName) {
        //     alert("You clicked on: " + mobileName);
        // }
  // Question no #03
//    function deleteRow(button) {
            
//             var row = button.parentNode.parentNode;
            
//             row.parentNode.removeChild(row);
//         }
   
  
  // Question no #04

   
        // function changeImage() {
        //     document.getElementById("mainImage").src = "image2.jpg"; 
        // }

        // function resetImage() {
        //     document.getElementById("mainImage").src = "image1.jpg"; }
  
         // Question no #05


 
        // let count = 0;


        // function increaseCounter() {
        //     count++;
        //     document.getElementById("counterValue").innerText = count;}

    
        // function decreaseCounter() {
        //     count--; 
        //     document.getElementById("counterValue").innerText = count;      
        //    }
   
