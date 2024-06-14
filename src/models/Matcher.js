import { Card } from "./Card.js";

export class Matcher {
  #cards = [];
  #randoms = [];
  #shuffleCards = [];

  constructor() {
    this.setRandoms();
    this.setCards();
  }

  setRandoms() {
    const randomNumbers = new Set();

    while (randomNumbers.size < 20) {
      randomNumbers.add(this.getRandomNumber());
    }

    this.#randoms = Array.from(randomNumbers);
  }

  setCards() {
    const images = [
      "public/aguacate.jpg",
      "public/banana.jpg",
      "public/fresa.jpg",
      "public/lemon.jpeg",
      "public/mango.jpg",
      "public/manzana.jpg",
      "public/naranja.jpg",
      "public/papaya.jpg",
      "public/piña.jpg",
      "public/sandia.jpg",
    ];
    const doubledImages = images.concat(images);

    for (let i = 0; i < doubledImages.length; i++) {
      const card = new Card(doubledImages[i], i);
      this.#cards.push(card);
    }
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 20);
  }

  getShuffleCard() {
    this.#shuffleCards = this.#randoms.map(
      (randomIndex) => this.#cards[randomIndex]
    );
    return this.#shuffleCards;
  }
}
