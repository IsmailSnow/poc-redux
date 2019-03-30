import { Component, OnInit } from '@angular/core';
import { IAppState } from '../appStore/store';
import { NgRedux, select } from '@angular-redux/store';
import { ADD_TODO, TOGGLE_TODO, REMOVE_ALL_TODOS } from '../actions/actions';
import { ITodo } from '../models/ITodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  @select() todos;

  model: ITodo = {
    id: 0,
    description: "",
    responsible: "",
    priority: "low",
    isCompleted: false 
  };

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  obSubmit() {
    this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({type: REMOVE_ALL_TODOS, id: todo.id });
  }
}
