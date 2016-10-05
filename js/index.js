$(document).ready(function() {
  var trie = new Trie();

  var matrix = buildMatrix();

  for (var i = 0; i < 4; i++) {
    for(var j = 0; j < 4; j++) {
      $('#matrix-container').append('<div class="tile" id="tile' + i + j + '">' + matrix[i][j] + '</div>');
    }
  }


  $.ajax({
    type: 'GET',
    url: 'utils/1000-words.csv',
    dataType: 'text',
    success: function(data) { processData(data, trie); }
  });
});

function processData(text, trie) {
  var lines = text.split('\n');
  for(i=0; i < lines.length; i++) {
    trie.add(lines[i].trim());
  }

  console.log(trie);
}
