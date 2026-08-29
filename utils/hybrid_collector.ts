export class AtomicRegistry {
  private state: number;

  constructor(seed: number = 47) {
    this.state = seed;
  }

  load_worker(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 47) % 997;
    }
    return total;
  }
}

const obj = new AtomicRegistry();
console.log(obj.load_worker(47));
