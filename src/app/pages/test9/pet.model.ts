export class Pet {
    constructor(
      public id: number,
      public name: string,
      public type: string,
      public breed: string,
      public age: number,
      public price: number,
      public isAvailable: boolean = true,
      public imageUrl?: string
    ) {}
  
    // 计算宠物的人类年龄（简化版）
    calculateHumanAge(): number {
      if (this.type === 'dog') {
        return this.age * 7;
      } else if (this.type === 'cat') {
        return this.age * 5;
      }
      return this.age;
    }
  
    // 应用折扣
    applyDiscount(percentage: number): void {
      if (percentage > 0 && percentage < 100) {
        this.price = this.price * (1 - percentage / 100);
      }
    }
  }  