export default class ParsedToken {
  sub: string;
  auth: string;
  name: string;
  exp: number;

  constructor(sub: string, auth: string, name: string, exp: number) {
    this.sub = sub;
    this.auth = auth;
    this.name = name;
    this.exp = exp;
  }
}
