import { Component } from '@angular/core';
import { Todo } from './datatype/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoValue:string = '';
  list:Todo[] =[]
  addItem(){
     if(this.todoValue!==''){
       this.list = [...this.list,{id:Date.now(),value:this.todoValue,status:true}]
     }
     this.todoValue = ''

  }

  deleteItem(id:number){
     this.list = this.list.filter(item=>item.id!==id)
  }

}
