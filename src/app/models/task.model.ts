export class Task {
  constructor(
    public title: string,
    public completed: boolean,
    public id?: string,
    public userId?: string,
  ) {  }
}
