import { Component, OnInit } from '@angular/core';
import { StackService } from '../../service/Stack.service';
import { Stack } from '../../shered/model/stack.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css'],
  providers: [ StackService, MessageService ]
})

export class StackComponent implements OnInit {

  activeState: boolean[] = [true, false, false];
  public stacks!: Stack[];

  constructor(private stackService: StackService, private messageService: MessageService) { }

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

    onTabClose(event: any) {
        this.messageService.add({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index})
    }

    onTabOpen(event: any) {
        this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }

    toggle(index: number) {
        this.activeState[index] = !this.activeState[index];
    }



}
