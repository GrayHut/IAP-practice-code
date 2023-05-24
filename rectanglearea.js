//function to calculate rectangle area

function rectangleArea(_l, _w)
{
    let area;

    area = length * width;

    return area;
}

const length = 5;
const width = 4;

const realRectangleArea = rectangleArea(length, width);

console.log('Length = ' + length + ' Width = ' + width + ' Area = ' + realRectangleArea);