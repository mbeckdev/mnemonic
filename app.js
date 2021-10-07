'use strict';

let returnNode = document.getElementById('return-string');

const nouns = {
  a: 'apples',
  b: 'bananas',
  c: 'cats',
  d: 'dogs',
  e: 'eagles',
  f: 'fish',
  g: 'ghosts',
  h: 'hotels',
  i: 'igloos',
  j: 'jellyfish',
  k: 'kangaroos',
  l: 'lollipops',
  m: 'milk',
  n: 'nachos',
  o: 'octagons',
  p: 'pineapples',
  q: 'quests',
  r: 'raccoons',
  s: 'sandwiches',
  t: 'turtles',
  u: 'utopias',
  v: 'velociraptors',
  w: 'windows',
  x: 'xylophones',
  y: 'yaks',
  z: 'zebras',
};

//rancid
const adjectives = {
  a: 'angry',
  b: 'bashful',
  c: 'cranky',
  d: 'delightful',
  e: 'epic',
  f: 'five',
  g: 'giddy',
  h: 'happy',
  i: 'introverted',
  j: 'jealous',
  k: 'kind',
  l: 'lazy',
  m: 'majestic',
  n: 'nasty',
  o: 'offensive',
  p: 'pleasant',
  q: 'quick',
  r: 'rancid',
  s: 'salty',
  t: 'tough',
  u: 'unique',
  v: 'voluminous',
  w: 'wobbly',
  x: 'xylophone-like',
  y: 'young',
  z: 'zesty',
};

//adverbs come before adjectives, pattern for this is 'd'
// ruthelessly,
const adverbs = {
  a: 'awkwardly',
  b: 'bitterly',
  c: 'comfortably',
  d: 'deeply',
  e: 'explosively',
  f: 'fully',
  g: 'gently',
  h: 'historically',
  i: 'initially',
  j: 'joyfully',
  k: 'knowingly',
  l: 'luckily',
  m: 'mostly',
  n: 'normally',
  o: 'outrageously',
  p: 'painfully',
  q: 'quietly',
  r: 'romantically',
  s: 'severely',
  t: 'totally',
  u: 'upbeat',
  v: 'very',
  w: 'wild',
  x: 'xenophobically',
  y: "yesterday's",
  z: 'zestily',
};

// verbs you do to other things, ie they allow a noun after
// present tense
const verbs = {
  a: 'approach',
  b: 'bite',
  c: 'cajole',
  d: 'dunk',
  e: 'eat',
  f: 'flick',
  g: 'grab',
  h: 'hit',
  i: 'insult',
  j: 'juggle',
  k: 'kick',
  l: 'lick',
  m: 'mine',
  n: 'need',
  o: 'obey',
  p: 'paint',
  q: 'quash',
  r: 'raise',
  s: 'slice',
  t: 'trick',
  u: 'upload',
  v: 'vote',
  w: 'wiggle',
  x: 'zerox',
  y: 'yell',
  z: 'zap',
};

// a = adjectives, d = adverbs, n = nouns, v = verbs
const patterns = {
  1: 'n',
  2: 'an',
  3: 'nvn',
  4: 'anvn',
  5: 'anvan',
  6: 'danvan',
  7: 'danvdan',
  8: 'ddanvdan',
  9: 'ddanvddan',
  10: 'dddanvddan',
  11: 'dddanvdddan',
};

// a in ...a... means the word in this space is an 'a'
const conjunctionPatterns = {
  '...at...': 'nvnccnvn',
  '...a...': 'nvncnvn',
  '...w...': 'nvncnvn',
  '...b...': 'nvncnvn',
  '...t...': 'nvncnvn',
  '...s...': 'nvncnvn',
  '...o...': 'nvncnvn',
  '...at....': 'nvnccanvn',
  '...a....': 'nvncanvn',
  '...w....': 'nvncanvn',
  '...b....': 'nvncanvn',
  '...t....': 'nvncanvn',
  '...s....': 'nvncanvn',
  '...o....': 'nvncanvn',
  '....at...': 'anvnccnvn',
  '....a...': 'anvncnvn',
  '....w...': 'anvncnvn',
  '....b...': 'anvncnvn',
  '....t...': 'anvncnvn',
  '....s...': 'anvncnvn',
  '....o...': 'anvncnvn',
  '....at....': 'anvnccanvn',
  '....a....': 'anvncanvn',
  '....w....': 'anvncanvn',
  '....b....': 'anvncanvn',
  '....t....': 'anvncanvn',
  '....s....': 'anvncanvn',
  '....o....': 'anvncanvn',
};

const conjunctionWords = {
  a: 'and', //after
  w: 'while',
  b: 'but', //because //before
  t: 'then',
  o: 'or',
  s: 'so',
};

const makeItButton = document.getElementById('make-it-button');
makeItButton.addEventListener('click', buttonClicked);

const inputNode = document.getElementById('input-node');
let inputString = '';

function buttonClicked(e) {
  e.preventDefault();
  inputString = inputNode.value.toString();

  console.log('inputString is ', inputString);
  console.log(inputNode);

  let strLength = inputString.length;
  let pattern = determinePattern(inputString.length); //returns like "anvan"
  let conjunctionPattern = determineConjunctionPattern(inputString, strLength);
  if (conjunctionPattern) {
    // if enteredPattern is not null
    pattern = conjunctionPattern; //ex. gives nvncnvn
  }

  let mnemonicString = '';
  let wordToPush = '';

  for (let i = 0; i < strLength; i++) {
    //find the letter
    //find the patter for that spot
    //get back a word that matches both
    //mnemonicString.push(thatletter)

    let letter = inputString[i].toLowerCase(); // 'd' of what was typed
    let thisPattern = pattern[i]; // 'a' a means adj

    if (thisPattern == 'c') {
      wordToPush = conjunctionWords[letter];
    } else if (thisPattern == 'a') {
      wordToPush = adjectives[letter];
    } else if (thisPattern == 'n') {
      wordToPush = nouns[letter];
    } else if (thisPattern == 'v') {
      wordToPush = verbs[letter];
    } else if (thisPattern == 'd') {
      wordToPush = adverbs[letter];
    }
    mnemonicString = mnemonicString.concat(wordToPush, ' ');
    console.log(mnemonicString);
  }

  mnemonicString = capitalize(mnemonicString);
  // Take off that extra space we added earlier so we can add a . at the end
  mnemonicString = mnemonicString.slice(0, -1);
  mnemonicString += '.';

  console.log(mnemonicString);
  returnNode.textContent = `${mnemonicString}`;
}

// this seems small for a function, I plan on expanding it later
function determinePattern(stringLength) {
  return patterns[stringLength];
}

function determineConjunctionPattern(stringEntered, strLength) {
  // does stringEntered have 6 length?
  //does stringEntered have an A in the third spot?

  //'...a...'

  for (const item in conjunctionPatterns) {
    // does epattersn2 item length equal this length?
    if (item.length === strLength) {
      // if (ePatterns2[i].length === strLength) {
      let dur = item;
      // let dur = '...a...';

      let counter = 0;
      for (let j = 0; j < strLength; j++) {
        //does letter == dur letter?
        if (dur[j] == '.') {
          //then do nothing
          counter++;
        } else if (dur[j] == stringEntered[j]) {
          counter++;
        } else {
          //nothing
        }
      }

      if (strLength === counter) {
        //it's a match!
        return conjunctionPatterns[dur]; //gives 'nvncnvn'
      }
    }
  }

  //not a match
  return null;
}

function capitalize(theSentence) {
  let firstLetter = theSentence[0];
  firstLetter = firstLetter.toUpperCase();
  let theRest = theSentence.slice(1);
  return firstLetter + theRest;
}
