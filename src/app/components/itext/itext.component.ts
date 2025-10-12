import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-itext',
  imports: [CommonModule],
  templateUrl: './itext.component.html',
  styleUrl: './itext.component.css',
})
export class ItextComponent {
  @Input() content: string = '';
}
