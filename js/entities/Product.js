// Product.js
export class Product {
  constructor(name, imageUrl, price, discountedPrice, rating) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.discountedPrice = discountedPrice;
    this.rating = rating;
  }

  render() {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = this.name;

    const imageEl = document.createElement("img");
    imageEl.src = this.imageUrl;

    const ratingEl = document.createElement("p");
    ratingEl.textContent = `⭐ ${this.rating}`;

    const priceEl = document.createElement("p");
    priceEl.textContent = `${this.discountedPrice}$`;

    const oldPrice = document.createElement("p");
    oldPrice.textContent = `${this.price}$`;

    const button = document.createElement("button");
    button.textContent = "Добавить в корзину";

    const menu = document.createElement("div");
    menu.classList.add("menu");


    card.append(
      title,
      imageEl,
      ratingEl,
      oldPrice,
      priceEl,
      button,
    );



    document.body.appendChild(card);


  }
}
