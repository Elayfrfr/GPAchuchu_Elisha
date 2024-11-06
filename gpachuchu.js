const gpa = parseFloat(prompt("Enter your GPA:"));
const height = parseFloat(prompt("Enter your height:"));
const weight = parseFloat(prompt("Enter your weight:"));

const formattedGpa = gpa.toFixed(2);
const formattedHeight = height.toFixed(2);
const formattedWeight = weight.toFixed(2);

console.log(`GPA: ${formattedGpa}`);
console.log(`Height: ${formattedHeight}`);
console.log(`Weight: ${formattedWeight}`);