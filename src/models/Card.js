export class Card {
  #image;
  #index;

  constructor(image, index) {
    (this.#image = image), (this.#index = index);
  }

  getIndex() {
    return this.#index;
  }

  getImage() {
    return this.#image;
  }
}
