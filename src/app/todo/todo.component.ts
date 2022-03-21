import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  /** מערך עבור המשימות */
  tasks:string[] = [];

  constructor() { 

    this.tasks = [
      ' task 1 ',
      ' task 2 ',
      ' task 3 ',
    ]

  }

  ngOnInit(): void {
  }

  handleSubmit(addForm:NgForm){
    let newTask = addForm.value.task;
    this.tasks.push(newTask);
    addForm.resetForm();

  }





}
