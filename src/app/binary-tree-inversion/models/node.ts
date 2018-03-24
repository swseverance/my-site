export class Node {
  public value: number;
  public left: Node = null;
  public right: Node = null;
  public inverted = false;

  constructor(public level: number) {}
}
