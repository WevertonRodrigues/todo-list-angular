export class User {
  constructor(
    public username: string,
    public password: string,
    public id?: string,
    public sameAsPassword?: string,
  ) {  }
}
