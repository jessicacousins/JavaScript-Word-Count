function countWords() {
  let text =
    "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort. It had a perfectly round door like a porthole, painted green, with a shiny yellow brass knob in the exact middle. The door opened on to a tube-shaped hall like a tunnel: a very comfortable tunnel without smoke, with panelled walls, and floors tiled and carpeted, provided with polished chairs, and lots and lots of pegs for hats and coats -- the hobbit was fond of visitors.";

  text = text.replace(/[.,]/g, "");
  text = text.toLocaleLowerCase();
  const wordArray = text.split(" ");
  console.log(wordArray);
  const wordCount = {};
  wordArray.forEach((item) => {
    if (wordCount[item] == null) wordCount[item] = 1;
    else {
      wordCount[item] += 1;
    }
  });

  let myArray = Object.entries(wordCount);
  let bArray = myArray
    .sort((a, b) => (a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0))
    .slice(0, 3);
  return {
    totalWords: wordArray.length,
    topWords: bArray,
  };
}

const { totalWords, topWords } = countWords();
document.getElementById(
  "word-count"
).innerHTML = `Total words: ${totalWords} <br> <br> Top 3 words: ${topWords[0][0]} (${topWords[0][1]}), ${topWords[1][0]} (${topWords[1][1]}), ${topWords[2][0]} (${topWords[2][1]})`;
