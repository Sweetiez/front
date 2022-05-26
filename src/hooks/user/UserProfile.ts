import ParsedToken from '../utils/ParsedToken';

export default class UserProfile {
  email: string;
  name: string;
  customer_id: string;

  constructor(token: ParsedToken) {
    this.email = token.sub;
    this.name = token.name;
    this.customer_id = token.customer_id;
  }
}
