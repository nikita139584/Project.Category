export class Order { // тип буде доступний зовні (ЕКСПОРТУЄТЬСЯ)
  constructor(orderNumber, totalAmount, deliveryAddress,cart = [] ) {
    this.orderNumber = orderNumber; // "Valera"
    this.totalAmount = totalAmount; // "white"
    this.deliveryAddress = deliveryAddress; // "Valera"
    this.cart = cart;
  }

getInfo(orderNumber,totalAmount,deliveryAddress) { // ця функція також буде доступна ззовні
  return {
    orderNumber: this.orderNumber,
    totalAmount: this.totalAmount,
    deliveryAddress: this.deliveryAddress,
    products: this.products
  };
}
changeOrderNumber(orderNumber) {
  this.orderNumber = orderNumber;
}
 changetotalAmount(totalAmount) {
  this.totalAmount = totalAmount;
}
changedeliveryAddress(deliveryAddress) {
  this.deliveryAddress = deliveryAddress;
}
addProducts(products) { // ця функція також буде доступна ззовні
  this.products.push(products);
}
remuveProducts(products) { // ця функція також буде доступна ззовні
  this.products = this.products.filter(i => i !== products);
}
}
