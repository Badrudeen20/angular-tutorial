import { Component,Input,EventEmitter,Output } from '@angular/core';
import { Todo } from 'src/app/todo/datatype/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  @Input() list: Todo[] =[];
  @Output() deleteBtn = new EventEmitter<number>()
  // ngDoCheck(){
  //   console.log(this.list)
  // }

  deleteItem(id:number){
   this.deleteBtn.emit(id)
  }

}
