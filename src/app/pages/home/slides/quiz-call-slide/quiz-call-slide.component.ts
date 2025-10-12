import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItextComponent } from "../../../../components/itext/itext.component";

@Component({
  selector: 'app-quiz-call-slide',
  imports: [RouterLink, ItextComponent],
  standalone: true,
  templateUrl: './quiz-call-slide.component.html',
  styleUrl: './quiz-call-slide.component.css',
})
export class QuizCallSlideComponent {}
