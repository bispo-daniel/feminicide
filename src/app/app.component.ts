import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Modak:100,200,300,400,600,700,800,900',
      'Roboto:100,200,300,400,600,700,800,900'
    ],
  },
});

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'feminicídio';
}
