export class Customer { // тип буде доступний зовні (ЕКСПОРТУЄТЬСЯ)
  constructor(firstName, lastName, email,phone= [] ) {
    this.firstName = firstName; // "Valera"
    this.lastName = lastName; // "white"
    this.email = email; // "Valera"
    this.phone = phone;
  }

 getInfo(name,count,rating) { // ця функція також буде доступна ззовні
  return {
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    phone: this.phone
  };
}
reName(newFirstName, newLastName) {
  this.firstName = newFirstName;
  this.lastName = newLastName;
}
changeEmail(newEmail) { // ця функція також буде доступна ззовні
  this.email = newEmail;
}
 changePhone(newPhone) { // ця функція також буде доступна ззовні
  this.phone = newPhone;
}
}

