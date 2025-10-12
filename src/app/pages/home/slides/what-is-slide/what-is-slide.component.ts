import { Component } from '@angular/core';
import { ItextComponent } from '../../../../components/itext/itext.component';

@Component({
  selector: 'app-what-is-slide',
  imports: [ItextComponent],
  standalone: true,
  templateUrl: './what-is-slide.component.html',
  styleUrls: ['./what-is-slide.component.css'],
})
export class WhatIsSlideComponent {
  public whatIsText01 =
    'matar mulher “por razões da condição do sexo feminino”';
  public whatIsText02 = 'violência doméstica e familiar';
  public whatIsText03 = 'menosprezo/discriminação à condição de mulher';
  public whatIsText04 = 'crime autônomo';
}
