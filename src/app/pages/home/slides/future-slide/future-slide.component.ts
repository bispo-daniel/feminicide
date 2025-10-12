import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItextComponent } from "../../../../components/itext/itext.component";

@Component({
  selector: 'app-future-slide',
  imports: [CommonModule, ItextComponent],
  standalone: true,
  templateUrl: './future-slide.component.html',
  styleUrl: './future-slide.component.css',
})
export class FutureSlideComponent {}
