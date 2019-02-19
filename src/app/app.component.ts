import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  input: string = '';
  hartHart: number = 0;
  edit = {
    index: 0,
    heart: false,
    editing: false
  };
  cards: { datetime: string, complaint: string, heart: boolean }[] = [];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.cast.subscribe(cards=> this.cards = cards);
    this.userService.love.subscribe(hearts=> this.hartHart = hearts);
  }

  refreshWhine() {
    this.input = '';
    this.edit.editing = false;
    console.log('refreshing...');
  }

  newWhine() {
    if(this.input == '') {
      alert('Everybodys got some problems!');
      return ;
    }

    let now = new Date();
    let stamp = now.getMonth()+1 +"-"+ now.getDate() + "-"+now.getFullYear()+", "+now.getHours()+":"+now.getMinutes();

    let newObj = {
      datetime: stamp,
      complaint: this.input,
      heart: this.edit.heart
    };

    if(this.edit.editing) {
      this.cards[this.edit.index] = newObj;
      this.userService.updateCards(this.cards);
      this.edit.editing = false;
      this.input = '';
    }
    else {
      this.userService.addWhimper(newObj);
      this.input = '';
    }

    this.edit.heart = false;
  }

  update($event) {
    this.input = $event.whine;
    this.edit.editing = true;
    this.edit.heart = $event.heart;
    this.edit.index = $event.index;
  }

}
