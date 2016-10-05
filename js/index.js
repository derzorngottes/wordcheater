$(document).ready(function() {
  var trie = new Trie();

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
