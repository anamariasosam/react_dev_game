export default class Level {
  constructor(params) {
    this.words = params.words.map(word => word.toUpperCase());
    this.topic = params.topic;
    this.letters = this.getLetters();
  }

  getLetters() {
    let letters = this.words.join('').toUpperCase().split('').sort();

    letters = letters.filter((item, index, array) => array.indexOf(item) === index);

    return letters;
  }
}
