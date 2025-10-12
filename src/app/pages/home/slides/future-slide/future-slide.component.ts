import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCardComponent } from '../../../../components/image-card/image-card.component';

@Component({
  selector: 'app-future-slide',
  imports: [ImageCardComponent, CommonModule],
  standalone: true,
  templateUrl: './future-slide.component.html',
  styleUrl: './future-slide.component.css',
})
export class FutureSlideComponent {
  challenges = [
    {
      imageUrl: 'assets/images/scale.png',
      title: 'Escalabilidade',
    },
    {
      imageUrl: 'assets/images/esg.png',
      title: 'Sustentabilidade',
    },
    {
      imageUrl: 'assets/images/time.png',
      title: 'Interoperabilidade',
    },
  ];
}
