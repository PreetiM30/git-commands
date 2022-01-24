import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() inputEvent = new EventEmitter();

  count:number = 0;
  onCreate(inpVal) {
    if(inpVal.value.length > 0) {
      this.count = this.count + 1;
      // alert(inpVal.value);
      this.inputEvent.emit(inpVal.value); //will pass data to parent component
    }
  }

}
