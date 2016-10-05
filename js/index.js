$(document).ready(function() {
  // Build trie
  var trie = new Trie();

  // Build matrix and append to DOM
  var matrix = buildMatrix();
  console.log(matrix);
  for (var i = 0; i < 4; i++) {
    for(var j = 0; j < 4; j++) {
      $('#matrix-container').append('<div class="tile" id="tile' + i + j + '">' + matrix[i][j].value + '</div>');
    }
  }

  $('.tile').click(function() {
    var x = event.target.id.slice(-1);
    var y = event.target.id.slice(-2,-1);

    var sides = getAllSides(matrix, x, y);
    console.log(sides);
  });

  // Read in words from CSV file and send to trie processor
  $.ajax({
    type: 'GET',
    url: 'utils/1000-words.csv',
    dataType: 'text',
    success: function(data) { processData(data, trie); }
  });
});

// Take output of CSV file, break down into each line (word) and add to trie
function processData(text, trie) {
  var lines = text.split('\n');
  for(i=0; i < lines.length; i++) {
    trie.add(lines[i].trim());
  }
  console.log(trie);
}
