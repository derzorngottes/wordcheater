$(document).ready(function() {
  // Build trie
  var trie = new Trie();

  // Build matrix and append to DOM
  var matrix = buildMatrix();

  for (var i = 0; i < 4; i++) {
    for(var j = 0; j < 4; j++) {
      $('#matrix-container').append('<div class="tile" id="tile' + i + j + '">' + matrix[i][j].value + '</div>');
    }
  }

  $('.tile').click(function() {
    var y = event.target.id.slice(-1);
    var x = event.target.id.slice(-2,-1);
    let startingChar = matrix[x][y].value;
    getAllWords(trie.head[startingChar], x, y);
  });

  // Read in words from CSV file and send to trie processor
  $.ajax({
    type: 'GET',
    url: 'utils/10000words.txt',
    dataType: 'text',
    success: function(data) { processData(data, trie); }
  });

  // Take output of CSV file, break down into each line (word) and add to trie
  function processData(text, trie) {
    var lines = text.split('\n');
    for(i=0; i < lines.length; i++) {
      trie.add(lines[i].trim());
    }
  }

  var words = [];
  var word = '';
  var matchingSides = 0;

  function getAllWords(rootNode, x, y) {
    word += matrix[x][y].value;
    console.log(word);
    matrix[x][y].visited = true;
    let sides = getAllSides(matrix, x, y);
    for(i = 0; i < sides.length; i++) {
      if(sides[i].value in rootNode) {
        matchingSides++;
        if(rootNode[sides[i].value].isEnd) {
          words.push(word);
        }
        rootNode = rootNode[sides[i].value];
        getAllWords(rootNode, sides[i].x, sides[i].y);
      }
      if((i = sides.length -1) && (matchingSides == 0)) {
        console.log('words: ' + words);
      }
    }
  }
});
