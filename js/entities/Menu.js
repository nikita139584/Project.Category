export class Menu {

  menurender() {

    const order = document.createElement("a");
    order.textContent = "Корзина";
    order.href = "/cart.html";

    const profil = document.createElement("a");
    profil.textContent = "Профиль";
    profil.href = "/profile.html";

    const category = document.createElement("a");
    category.textContent = "Категории";
    category.href = "/html/category.html";

    const mainscreen = document.createElement("a");
    mainscreen.textContent = "Главный Экран";
    mainscreen.href = "../index.html";

    const wrapper = document.createElement("div");
    wrapper.classList.add("top-menu-wrapper");

    const menu = document.createElement("div");
    menu.classList.add("top-menu");

    menu.append(order, profil, category,mainscreen);

    wrapper.appendChild(menu);

    document.body.prepend(wrapper);
  }
}
