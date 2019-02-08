import { Component } from '@angular/core';

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
    editing: false
  };
  cards: { datetime: string, complaint: string }[] = [
    { 'datetime': '12-31-1990, 3:15', 'complaint': 'Y u do diz to meh?'},
    { 'datetime': '12-31-2018, 10:20', 'complaint': 'I dun fel gud mr Stork!'}
  ];

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
    let stamp;
    // console.log(now);
    stamp = now.getMonth()+1 +"-"+ now.getDate() + "-"+now.getFullYear()+", "+now.getHours()+":"+now.getMinutes();

    let newObj = {
      datetime: stamp,
      complaint: this.input
    };

    if(this.edit.editing) {
      this.cards[this.edit.index] = newObj;
      this.edit.editing = false;
      this.input = '';
    }
    else {
      this.cards.push(newObj);
      this.input = '';
    }
  }

  receiveHart($event) {
    ($event) ? this.hartHart++ : this.hartHart--;
  }

  update($event) {
    if($event.type == 'delete') {
      this.cards.splice($event.index, 1);
      //if the post has hart-hart
      if ($event.hart) this.hartHart--;
    }
    else {
      this.input = $event.whine;
      this.edit.editing = true;
      this.edit.index = $event.index;
    }
  }

}
