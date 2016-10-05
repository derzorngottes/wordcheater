// Takes rootNode coords, returns an array of pointers to unvisited sides
function getAllSides(rootNode) {
  if([x-1, y-1]) {
    sides.push([x-1, y-1]);
    sides.push([x-1, y]);
    sides.push([x, y-1]);
  }
  if([x+1, y+1]) {
    sides.push([x+1, y+1]);
    sides.push([x+1, y]);
    sides.push([x, y+1]);
  }
  if([x+1, y-1]) {
    sides.push([x+1, y-1]);
  }
  if([x-1, y+1]) {
    sides.push([x-1, y+1]);
  }
}
