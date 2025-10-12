import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { QuizService, QuizQuestion } from '../../core/services/quiz.service';

const PALETTE = ['#7b98b8', '#4c795c', '#513F7A', '#eb4c2d', '#F4BE23'];

function shuffle<T>(arr: T[]): T[] {
  return [...arr]
    .map((v) => ({ v, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(({ v }) => v);
}

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class QuizComponent implements OnInit {
  loading = true;
  questions: QuizQuestion[] = [];
  picked: number[] = [];
  cardColors: string[][] = [];

  @ViewChild('mainSwiper', { static: true })
  mainSwiper!: ElementRef<HTMLElement>;

  constructor(private qs: QuizService) {}

  async ngOnInit() {
    try {
      this.questions = await this.qs.getQuiz();
      this.picked = Array(this.questions.length).fill(-1);
      this.cardColors = this.questions.map((q) =>
        shuffle(PALETTE).slice(0, q.options.length)
      );
    } finally {
      this.loading = false;
    }
  }

  choose(qIdx: number, optIdx: number) {
    this.picked[qIdx] = optIdx;

    setTimeout(() => {
      if (qIdx < this.questions.length - 1) {
        (this.mainSwiper.nativeElement as any).swiper.slideNext();
      }
    }, 400);
  }

  get score() {
    return this.questions.reduce(
      (sum, q, i) => (this.picked[i] === q.correct ? sum + 1 : sum),
      0
    );
  }
}
