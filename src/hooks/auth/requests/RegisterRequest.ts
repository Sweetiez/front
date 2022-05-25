export default class RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;

  constructor(
    lastName: string,
    firstName: string,
    email: string,
    phone: string,
    password: string,
  ){
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }
}
