import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() whimper: string
  @Input() datetime: string
  @Input() index: number
  @Input() heart: boolean
  @Output() edit: any = new EventEmitter();

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  loveIt() {
    this.heart = !this.heart;
    this.userService.updateHeart(this.index, this.heart);
  }

  change() {
    this.edit.emit({'index': this.index, 'heart': this.heart, 'whine': this.whimper});
  }

  delete() {
    this.userService.deleteWhimper(this.index);
  }

}
