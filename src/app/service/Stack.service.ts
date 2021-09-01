import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Stack } from '../shered/model/stack.model';

@Injectable()
export class StackService {

  constructor(private http: HttpClient) { };

  public stacks: Stack[] = [
    { name: "Java" },
    { name: 'C#' },
    { name: 'Python' },
    { name: 'Java Script' },
    { name: 'Angular' },
    { name: 'ReactJS' }
  ];

  public getStacks(): Promise<Stack[]> {
    return new Promise((resolve, reject) => {
      resolve(this.stacks);
      reject({id_erro: 404, message: 'Service not found!'})
    })
  }
}
