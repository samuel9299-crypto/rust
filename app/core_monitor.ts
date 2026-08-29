export class SimpleEngine {
  private state: number;

  constructor(seed: number = 61) {
    this.state = seed;
  }

  build_dispatcher(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 61) % 997;
    }
    return count;
  }
}

const obj = new SimpleEngine();
console.log(obj.build_dispatcher(61));
