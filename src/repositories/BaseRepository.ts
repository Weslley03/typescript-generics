export class BaseRepository<T extends { id: number }> {
  private items: T[] = [];
  private currentId = 1;

  findAll(): T[] {
    return this.items;
  };

  finOne(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  };

  create(item: Omit<T, 'id'>): T {
    const newItem = { ...item, id: this.currentId++ } as T;
    this.items.push(newItem);
    return newItem;
  };

  update(id: number, item: Partial<T>): T | undefined {
    const index = this.items.findIndex(i => i.id === id);
    if(index === -1) return undefined;

    this.items[index] = { ...this.items[index], ...item };
    return this.items[index];
  };

  delete(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  };
};