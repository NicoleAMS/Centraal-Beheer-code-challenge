export class Voertuig {
  public id: number;
  public type: string;
  public subtypes: string[];
  public imagePath: string;

  constructor(id: number, type: string, subtypes: string[], imagePath: string) {
    this.id = id;
    this.type = type;
    this.subtypes = subtypes;
    this.imagePath = imagePath;
  }
}