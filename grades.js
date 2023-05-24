//function that gives the grade for student marks

function studentgradeMarks(marks)
{
    let grade;

    if (marks >= 0 && marks <= 39)
    {
        grade = 'F';
    }
    else if (marks >= 40 && marks <=49)
    {
        grade = 'E';
    }
    else if (marks >= 50 && marks <= 59)
    {
        grade = 'D';
    }
    else if (marks >= 60 && marks <= 69)
    {
        grade = 'C';
    }
    else if (marks >= 70 && marks <= 79)
    {
        grade = 'B';
    }
    else if (marks >= 80 && marks <=100)
    {
        grade = 'A';
    }
    else 
    {
        grade = 'Inavalid input';
    }

    return grade;
}

const studentMarks = 64;
const studentGrades = studentgradeMarks(studentMarks);

console.log('Student Marks are ' + studentMarks + ' And equivalent Grade is ' + studentGrades);