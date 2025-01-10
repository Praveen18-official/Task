let marks = 90;
let grade;
if (marks >= 90) {
    grade = 'A';
} else if (marks >= 80) {
    grade = 'B';
} else if (marks >= 70) {
    grade = 'C';
} else if (marks >= 50) {
    grade = 'D';
} else {
    grade = 'F';
}
console.log('Grade: ' + grade);