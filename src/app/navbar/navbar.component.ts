import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  search: string = '';
  fire: any;
  @Output() string: any = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  looking(event) {
    clearTimeout(this.fire);
    this.fire = setTimeout(()=>{
      this.string.emit(event);
    }, 1000);
  }


}
