import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

  private cards = new BehaviorSubject<Array<any>>([
    { 'datetime': '12-31-1990, 3:15', 'complaint': 'Y u do diz to meh?', 'heart': true},
    { 'datetime': '12-31-2018, 10:20', 'complaint': 'I dun fel gud mr Stork!', 'heart': false}
  ]);

  private hearts = new BehaviorSubject<number>(0);

  cast = this.cards.asObservable();
  love = this.hearts.asObservable();

  constructor() {
    this.countHeart();
  }

  getCards() {
    return this.cards.value;
  }

  countHeart() {
    let count = 0;
    // console.log(this.cards);
    this.cards.value.forEach(el => {
      if(el.heart) {count++}
    });
    
    this.hearts.next(count);
  }

  updateHeart(index, heart) {
    const stream = this.cards.value;
    stream[index].heart = heart;
    this.updateCards(stream);
  }

  updateCards(cards) {
    this.cards.next(cards);
    this.countHeart();
  }

  addWhimper(whimperObj) {
    const currentValue = this.cards.value;
    const updatedValue = [...currentValue, whimperObj];
    this.cards.next(updatedValue);
  }

  deleteWhimper(index) {
    const stream = this.cards.value;
    stream.splice(index, 1);
    this.updateCards(stream);
  }

}
