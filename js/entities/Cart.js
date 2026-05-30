export class Cart { // тип буде доступний зовні (ЕКСПОРТУЄТЬСЯ)
  constructor(products= [], totalPrice, customerName) {
    this.products = products; // "Valera"
    this.totalPrice = totalPrice; // "white"
    this.customerName = customerName; // "Valera"
  }


addProducts(products) { // ця функція також буде доступна ззовні
  this.products.push(products);
}
remuveProducts(products) { // ця функція також буде доступна ззовні
  this.products = this.products.filter(i => i !== products);
}
getInfo(products,totalPrice,customerName) {
  return {
    products: this.products,
    totalPrice: this.totalPrice,
    customerName: this.customerName
    };
  }
}
