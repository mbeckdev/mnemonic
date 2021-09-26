# mnemonic

[Try it here!](https://mbeckdev.github.io/mnemonic/)

Need help remembering a few letters?

Enter your letters and click the button.

Bam! A sentence appears with every word starting with one of your letters. If you remember that sentence, you can remember your word easier.

Example:

- I want to remember the phrase "Mitochondria are the powerhouse of the cell". So I enter MATPOTC.

- It returns "Mostly angry turtles paint outrageously tough cats"

## Code Notes

- I have a few arrays. One for nouns, adjectives, adverbs, and verbs.

- I also have another array for patterns that says as an example, for 4 letters, make a sentence with an adjective, then noun, then verb, then noun.

- Verbs were chosen so that it makes sense in this sentence "dogs (verb) dogs", and nouns were chosen to make sense in this sentence "(noun) eat (noun)"

## Possible Updates for the future

- Each noun has only one word per letter, maybe add more words per letter. Same goes for the adjectives, adverbs, and verbs. Will have to add some logic to randomly choose which ones to use.

- Add prepositions to make longer words! Like 'in a forest' or 'from the valley'

  - I could only get a 11 word long sentence without them and it's a bit of a stretch 'adverb adverb adverb adjective noun verb adverb adverb adverb adjective noun'

- Add conjunctions to get longer words (that reminds me of the kid's song 'Conjuction junction, what's your function', good times.) -- like "and" and "but" to create super long runon sentences! Oh yea! That would work really well!

- Possibly add articles - like "a", "the", and "an". "an" might be tricky as it depends on how the next word sounds. How it sounds! I don't have anyway to know that, I just have letters and the english language can be tricky sometimes with pronunciation. I for one believe we should say "a history lesson" instead of "an history lesson". Oh I just looked it up a little. One theory is that some english speakers don't say the "h" sound so it would make sense to use "an" there. I personally say the "h" sound so I'm going to say it with an "a".

## Things I learned

- No you can't use .splice() on a string no matter how many times you try it. .splice() works on arrays though. Use .slice() on strings.
