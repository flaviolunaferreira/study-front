import { Component, OnInit } from '@angular/core';
import { StackService } from '../../service/Stack.service';
import { Stack } from '../../shered/model/stack.model';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css'],
  providers: [ StackService ]
})

export class StackComponent implements OnInit {

  public stacks!: Stack[];

  constructor(private stackService: StackService) { }

  ngOnInit() {

    this.stackService.getStacks()
    .then(
      (stacks: Stack[]) => {this.stacks = stacks},
      )
      .catch(
        (param: any) => console.log(param)
      );
    console.log(this.stackService.getStacks());
    }

}
