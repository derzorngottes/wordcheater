// Takes rootNode coords, returns an array of pointers to unvisited sides
function getAllSides(matrix, x, y) {
  let sides = [];

  if((+x-1 >= 0) && (+y-1 >= 0) && !matrix[+x-1][+y-1].visited) sides.push({ value: matrix[+x-1][+y-1].value, x: +x-1, y: +y-1 });
  if((+x >= 0) && (+y-1 >= 0) && !matrix[+x][+y-1].visited) sides.push({ value: matrix[+x][+y-1].value, x: +x, y: +y-1 });
  if((+x+1 <= 3) && (+y-1 >= 0) && !matrix[+x+1][+y-1].visited) sides.push({ value: matrix[+x+1][+y-1].value, x: +x+1, y: +y-1 });
  if((+x-1 >= 0) && (+y >= 0) && !matrix[+x-1][+y].visited) sides.push({ value: matrix[+x-1][+y].value, x: +x-1, y: +y });
  if((+x+1 <= 3) && (+y >= 0) && !matrix[+x+1][+y].visited) sides.push({ value: matrix[+x+1][+y].value, x: +x+1, y: +y });
  if((+x-1 >= 0) && (+y+1 <= 3) && !matrix[+x-1][+y+1].visited) sides.push({ value: matrix[+x-1][+y+1].value, x: +x-1, y: +y+1 });
  if((+x >= 0) && (+y+1 <= 3) && !matrix[+x][+y+1].visited) sides.push({ value: matrix[+x][+y+1].value, x: +x, y: +y+1 });
  if((+x+1 <= 3) && (+y+1 <= 3) && !matrix[+x+1][+y+1].visited) sides.push({ value: matrix[+x+1][+y+1].value, x: +x+1, y: +y+1 });

  return sides;
}
