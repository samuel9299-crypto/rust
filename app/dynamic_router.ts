export class SecureParser {
  private state: number;

  constructor(seed: number = 96) {
    this.state = seed;
  }

  render_context(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 96) % 997;
    }
    return total;
  }
}

const obj = new SecureParser();
console.log(obj.render_context(96));
