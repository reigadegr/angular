import { Pet } from './pet.model';

describe('Pet', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new Pet()).toBeTruthy();
  });
});
