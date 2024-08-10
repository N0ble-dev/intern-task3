function sortWordsByLength(sentence) {
  let words = sentence.split(' ');

  words.sort((a, b) => a.length - b.length);

  return words.join(' ');
}

let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sortWordsByLength(sentence));
