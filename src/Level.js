export default class Level {
  constructor(params) {
    this.level = params.level;
    this.words = params.words;
    this.letters = this.getLetters();
  }

  getLetters() {
    let letters = this.words.join('').toUpperCase().split('').sort();

    letters = letters.filter((item, index, inputArray) => inputArray.indexOf(item) === index);

    return letters;
  }
}
