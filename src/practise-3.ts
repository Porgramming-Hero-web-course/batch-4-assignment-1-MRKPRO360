type CountWordOccur = (sentence: string, word: string) => number;

const countWordOccurrences: CountWordOccur = (sentence, word) => {
  const lowerSentence = sentence.toLowerCase();
  const splitLowerStr = lowerSentence
    .split(' ')
    .map((el: string) => {
      if (el.startsWith('t')) {
        return el.slice(0, word.length);
      }
    })
    .filter((el) => el !== undefined);

  let val = 0;

  splitLowerStr.forEach((el: string, _: number): void => {
    if (el === word) {
      val += 1;
    }
  });

  return val;
};

const countResult = countWordOccurrences(
  'TypeScript is great. I love TypeScript!',
  'typescript'
);

console.log(countResult);
