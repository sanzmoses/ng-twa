import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() whimper: string
  @Input() datetime: string
  @Input() index: number
  @Output() hartEvent: any = new EventEmitter();
  @Output() editDelete: any = new EventEmitter();
  hartHart = false;

  constructor() { }

  ngOnInit() {
  }

  loveIt() {
    this.hartHart = !this.hartHart;
    this.hartEvent.emit(this.hartHart);
  }

  change(type) {
    this.editDelete.emit({'type':type, 'index': this.index, 'hart': this.hartHart, 'whine': this.whimper});
  }

}
