export class Example {
  public id?: number;
  public createdAt: Date;
  public title: string;

  constructor(example: { id?: number; createdAt: Date; title: string }) {
    this.id = example.id;
    this.createdAt = example.createdAt;
    this.title = example.title;
  }
}
