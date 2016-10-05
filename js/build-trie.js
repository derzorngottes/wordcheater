function Trie() {
  this.head = {
    isEnd: false
  }
}

Trie.prototype.add = function(word) {
  var node = this.head;

  for(var i = 0; i < word.length; i++) {
    if(!(word[i] in node)) {
      if(i === word.length-1) {
        node[word[i]] = { isEnd: true };
      } else {
        node[word[i]] = { isEnd: false };
      }
    }
    node = node[word[i]];
  }
}

Trie.prototype.search = function(word) {
  var node = this.head;

  for(var i = 0; i < word.length; i++) {
    if(!(word[i] in node)) {
      return false;
    }
    node = node[word[i]]
  }
  return node.isEnd;
}
