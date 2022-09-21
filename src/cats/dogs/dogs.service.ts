import { Injectable } from '@nestjs/common';

export interface Dog {
  name: string;
  age: number;
  breed: string;
  sound: string;
}

@Injectable()
export class DogsService {
  private readonly dogs: Dog[] = [];

  create(cat: Dog) {
    this.dogs.push(cat);
  }

  findAll(): Dog[] {
    return this.dogs;
  }
}
