export default class ParsedToken {
  sub: string;
  auth: string;
  name: string;
  exp: number;
  customer_id: string;

  constructor(
    sub: string,
    auth: string,
    name: string,
    exp: number,
    customer_id: string,
  ) {
    this.sub = sub;
    this.auth = auth;
    this.name = name;
    this.exp = exp;
    this.customer_id = customer_id;
  }
}
