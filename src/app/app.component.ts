import { Component } from '@angular/core';
import * as symlinkedPlugin from 'symlinkedplugin';

console.log(symlinkedPlugin);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testApp';
}
