import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  imports: [],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css',
})
export class ImageCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() gap: number = 0;
}
