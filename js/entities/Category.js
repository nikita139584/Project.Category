// Category.js
export class Category {

  constructor(name, imageUrl, itemsCount, description, link) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.itemsCount = itemsCount;
    this.description = description;
    this.link = link;
  }

  render() {

    // Карточка категории
    const card = document.createElement("div");
    card.classList.add("card");

    // Название категории
    const title = document.createElement("h2");
    title.textContent = this.name;

    // Картинка категории
    const imageEl = document.createElement("img");
    imageEl.src = this.imageUrl;
    imageEl.alt = this.name;

    // Количество товаров
    const itemsEl = document.createElement("p");
    itemsEl.textContent = `Товаров: ${this.itemsCount}`;

    // Описание
    const descriptionEl = document.createElement("p");
    descriptionEl.textContent = this.description;

    // Ссылка перехода
    const linkEl = document.createElement("a");
    linkEl.textContent = "Открыть категорию";
    linkEl.href = this.link;

    // Добавляем элементы в карточку
    card.append(
      title,
      imageEl,
      itemsEl,
      descriptionEl,
      linkEl
    );

    // Добавляем карточку на страницу
    document.body.appendChild(card);
  }
}
