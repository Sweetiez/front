export default class UpdateProfileRequest {
  id: string | undefined;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  constructor(
    id: string | undefined,
    lastName: string,
    firstName: string,
    email: string,
    phone: string,
  ) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }
}
