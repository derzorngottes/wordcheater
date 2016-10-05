// Make 4x4 square of random characters
function buildMatrix() {
  var chars = "abcdefghijklmnopqrstuvwxyz";
  var square = [[],[],[],[]];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      square[i].push(chars.charAt(Math.floor(Math.random() * 26)));
    }
  }
  return square;
}
