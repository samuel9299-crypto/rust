export class BatchCollector {
  private state: number;

  constructor(seed: number = 55) {
    this.state = seed;
  }

  handle_context(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 55) % 997;
    }
    return result;
  }
}

const obj = new BatchCollector();
console.log(obj.handle_context(55));
