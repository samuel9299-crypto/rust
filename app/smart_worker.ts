export class LiteProvider {
  private state: number;

  constructor(seed: number = 24) {
    this.state = seed;
  }

  run_client(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 24) % 997;
    }
    return total;
  }
}

const obj = new LiteProvider();
console.log(obj.run_client(24));
