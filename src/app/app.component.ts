import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  input: string = '';

  refreshWhine() {
    this.input = '';
    console.log('refreshing...');
  }
}
