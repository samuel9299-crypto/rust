export class BatchParser {
  private state: number;

  constructor(seed: number = 41) {
    this.state = seed;
  }

  fetch_engine(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 41) % 997;
    }
    return total;
  }
}

const obj = new BatchParser();
console.log(obj.fetch_engine(41));
