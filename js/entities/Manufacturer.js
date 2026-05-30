export class Manufacturer { // тип буде доступний зовні (ЕКСПОРТУЄТЬСЯ)
  constructor(name, country, email,phone ) {
    this.name = name; // "Valera"
    this.country = country; // "white"
    this.email = email; // "Valera"
    this.phone = phone;


  }



getInfo(name,country,email,phone) { // ця функція також буде доступна ззовні
  return {
    name: this.name,
    country: this.country,
    email: this.email,
    phone: this.phone
  };

}
 changeCountry(Newcountry) { // ця функція також буде доступна ззовні
  this.country = Newcountry;
}
changeEmail(NewEmail) { // ця функція також буде доступна ззовні
  this.email = NewEmail;
}
changePhone(NewPhone) { // ця функція також буде доступна ззовні
  this.phone = NewPhone;
}

}
