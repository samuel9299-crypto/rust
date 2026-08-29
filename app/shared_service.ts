export class AtomicService {
  private state: number;

  constructor(seed: number = 17) {
    this.state = seed;
  }

  flush_loader(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 17) % 997;
    }
    return value;
  }
}

const obj = new AtomicService();
console.log(obj.flush_loader(17));
