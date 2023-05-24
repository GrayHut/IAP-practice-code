//function calculating area of rectangle with user input

function rectangleArea(l,w)
{
    let area;

    area = l * w;

    return area;
}

var l = parseFloat(prompt('Enter the value of length:'));
var w = parseFloat(prompt('Enter the value of width:'));

var rectArea = rectangleArea(l, w);
console.log('The value of the area of your rectangle is: ' + rectArea);