export class TaskGenerator {

  static default() {
    return [
      {
        isDone: true,
        name: 'Update Excel',
      }, {
        isDone: false,
        name: 'Clean the room',
      }, {
        isDone: true,
        name: 'Go shopping',
      }];
  }

  static random100() {
    return this.random(100);
  }

  static random500() {
    return this.random(500);
  }

  static random1k() {
    return this.random(1000);
  }

  static random5k() {
    return this.random(5000);
  }

  static random10k() {
    return this.random(10000);
  }

  static random20k() {
    return this.random(20000);
  }

  static random(amount) {
    const arr = Array(amount);
    for (let i = 0; i < amount; i++) {
      const rand = Math.random();
      arr[i] = {
        isDone: rand > 0.5,
        name: `${i} - ${rand}`,
      };
    }
    return arr;
  }
}