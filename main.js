// const body = document.body;

// selecting all paraghraphs
const pWords = document.querySelectorAll('p');
const h1Words = document.querySelectorAll('h1');
const h2Words = document.querySelectorAll('h1');
const h3Words = document.querySelectorAll('h1');
const spans = document.querySelectorAll('span');

// returns array of sentences
// turn sentences into array of words
// turn array of array of words into array of words

const arrOfSentences = [];
const thingsToIgnore = [
  'the',
  'of',
  'a',
  'and',
  'in',
  'by',
  'with',
  'to',
  'as',
  'is',
  'that',
  'or',
  'it',
  '',
];

// put words into array
pWords.forEach((e) =>
  arrOfSentences.push(e.innerText.replace(/[^A-Z0-9 ]/gi, '').toLowerCase())
);

h1Words.forEach((e) =>
  arrOfSentences.push(e.innerText.replace(/[^A-Z0-9 ]/gi, '').toLowerCase())
);

h2Words.forEach((e) =>
  arrOfSentences.push(e.innerText.replace(/[^A-Z0-9 ]/gi, '').toLowerCase())
);

h3Words.forEach((e) =>
  arrOfSentences.push(e.innerText.replace(/[^A-Z0-9 ]/gi, '').toLowerCase())
);

spans.forEach((e) =>
  arrOfSentences.push(e.innerText.replace(/[^A-Z0-9 ]/gi, '').toLowerCase())
);

const arrOfWords = arrOfSentences.map((e) => e.split(' '));
const arrOfWords2 = arrOfWords.flat(Infinity);
const filteredWords = arrOfWords2.filter((e) => {
  return !thingsToIgnore.includes(e);
});

// put words into map with counters
const wordMap = new Map();
filteredWords.forEach((word) => {
  wordMap.set(word, wordMap.get(word) + 1 || 1);
});

// generate word cloud
// use keys as innertext
// use values as font-size

// function generateWord(key, value) {
//     const word = document.createElement('p');
//     word.setAttribute('class', `${key}string`)
//     word.innerText = key;
//     word.
// }

const maxCount = Math.max(...wordMap.values());
const avgCount = maxCount / wordMap.size;
const avgAdjusted = (maxCount + avgCount) / 2;
let mapVals = Array.from(wordMap.values());
mapVals.sort((a, b) => b - a);
const twentyFifth = mapVals[30] || 0;

const wordCloudDiv = document.createElement('div');
wordCloudDiv.setAttribute('class', 'wordCloud');
wordCloudDiv.style.display = 'flex';
wordCloudDiv.style.flexFlow = 'row wrap';

document.querySelector('body').innerHTML = '';

let timer = 25;

for (let [key, value] of wordMap) {
  if (value >= 1) {
    const word = document.createElement('p');
    word.setAttribute('class', `classname${key}`);
    word.innerHTML = '&#160;' + key;
    word.style.fontSize = `0px`;
    wordCloudDiv.appendChild(word);
    word.style.transitionProperty = 'font-size';
    word.style.transitionDelay = '250ms';
    word.style.transitionDuration = '4s';

    const targetFontSize = (5 * value) / avgAdjusted;
    setTimeout(() => {
      word.style.fontSize = `${targetFontSize}em`;
      return;
    });

    word.addEventListener('click', (e) => {
      e.target.style.transitionDuration = '0.1s';
      e.target.style.fontSize = '0px';
      console.log(wordMap.get(word.innerText.slice(1)));
      wordMap.delete(word.innerText.slice(1));
      console.log(wordMap.get(word.innerText.slice(1)));
      const newMaxCount = Math.max(...wordMap.values());
      const newAvgCount = newMaxCount / wordMap.size;
      const newAvgAdjusted = (newMaxCount + newAvgCount) / 2;
      let newMapVals = Array.from(wordMap.values());
      newMapVals.sort((a, b) => b - a);
      const newTwentyFifth = newMapVals[30] || 0;
      //console.log(newTwentyFifth);

      for (let [key2, value2] of wordMap) {
        //console.log(key2);

        if (value2 >= 1) {
          let newWord = document.querySelector(`.classname${key2}`);
          console.log(newWord);
          if (!newWord) {
            console.log('here');
            newWord = document.createElement('p');
            newWord.setAttribute('class', `classname${key}`);
            newWord.innerHTML = '&#160;' + key;
            newWord.style.fontSize = `0px`;
            wordCloudDiv.appendChild(newWord);
            newWord.style.transitionProperty = 'font-size';
            newWord.style.transitionDelay = '250ms';
            newWord.style.transitionDuration = '4s';
          }

          //   word.style.transitionProperty = 'font-size';
          //   word.style.transitionDelay = '250ms';
          //   word.style.transitionDuration = '4s';

          const targetFontSize = (5 * value2) / newAvgAdjusted;
          setTimeout(() => {
            newWord.style.fontSize = `${targetFontSize}em`;
            return;
          });
        }
      }
      //   setTimeout(() => {
      //     e.target.remove();
      //     return;
      //   }, 250);
      //   ;
    });
  }
}

// for (let [key, value] of wordMap) {
//   if (value >= 2) {
//     const word = document.querySelector(`.${key}classname`);
//     console.log(word);
//     word.style.fontSize = `${Math.ceil(value / 3)}em`;
//   }
// }

var styles = `
p {
    margin: 0px;
    padding: 0px;
}
p:hover {
    -ms-transform: scale(1.1); /* IE 9 */
    -webkit-transform: scale(1.1); /* Safari 3-8 */
    transform: scale(1.1);
  }


  
  
  `;
var styleSheet = document.createElement('style');
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

document.querySelector('body').appendChild(wordCloudDiv);

console.log(wordMap);
