export default class UpdatePasswordRequest {
  email: string | undefined;
  currentPassword: string;
  newPassword: string;

  constructor(
    email: string | undefined,
    currentPassword: string,
    newPassword: string,
  ) {
    this.email = email;
    this.currentPassword = currentPassword;
    this.newPassword = newPassword;
  }
}
