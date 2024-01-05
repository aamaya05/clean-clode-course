interface Bird {
  fly(): void;
  run(): void;
  eat(): void;
}


class Tucan implements Bird {

  public run() {}
  public fly() {}
  public eat() {}

}


class Humminbird implements Bird {

  public fly() {}
  public eat() {}
  public run() {}

}

class Ostrich implements Bird {
  fly(): void {
    throw new Error("Method not implemented.");
  }
  run(): void {
    throw new Error("Method not implemented.");
  }
  eat(): void {
    throw new Error("Method not implemented.");
  }

}