// Takes rootNode coords, returns an array of pointers to unvisited sides
function getAllSides(matrix, x, y) {
  let sides = [];

  // If there exists a square diagonally negative, add those sides
  if((x-1 >= 0) && (y-1 >= 0)) {
    if (!matrix[x-1,y-1].visited) sides.push(matrix[x-1, y-1]);
    if (!matrix[x-1,y].visited) sides.push(matrix[x-1, y]);
    if (!matrix[x,y-1].visited) sides.push(matrix[x, y-1]);
  }

  // If there exists a tile diagonally positive, add those sides
  if((x+1 <=3) && (y+1 <= 3)) {
    if (!matrix[x+1,y+1].visited) sides.push(matrix[x+1, y+1]);
    if (!matrix[x+1,y].visited) sides.push(matrix[x+1, y]);
    if (!matrix[x,y+1].visited) sides.push(matrix[x, y+1]);
  }

  // Check two remaining diagonals
  if((x+1 <= 3) && (y-1 >= 0)) {
    if (!matrix[x+1,y-1].visited) sides.push(matrix[x+1, y-1]);
  }

  if((x-1 >= 0) && (y+1 <= 3)) {
    if (!matrix[x-1,y+1].visited) sides.push(matrix[x-1, y+1]);
  }

  return sides;
}
