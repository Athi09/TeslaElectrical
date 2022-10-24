import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-model',
  templateUrl: './message-model.component.html',
  styleUrls: ['./message-model.component.css']
})
export class MessageModelComponent implements OnInit {

  @Input() message : string ='';
  @Output() modalClose = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  modalClassClicked() {
    this.modalClose.emit(true)
  }

}
