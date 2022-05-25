import ParsedToken from '../utils/ParsedToken';

export default class UserProfile {
  email: string;
  name: string;

  constructor(token: ParsedToken) {
    this.email = token.sub;
    this.name = token.name;
  }
}
