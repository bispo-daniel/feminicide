import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroSlideComponent } from './slides/intro-slide/intro-slide.component';
import { WhatIsSlideComponent } from './slides/what-is-slide/what-is-slide.component';
import { HowItHappensSlideComponent } from './slides/how-it-happens-slide/how-it-happens-slide.component';
import { NationalDataSlideComponent } from './slides/national-data-slide/national-data-slide.component';
import { LawSlideComponent } from './slides/law-slide/law-slide.component';
import { IntersectionalitySlideComponent } from './slides/intersectionality-slide/intersectionality-slide.component';
import { FutureSlideComponent } from './slides/future-slide/future-slide.component';
import { StudySlideComponent } from './slides/study-slide/study-slide.component';
import { QuizCallSlideComponent } from './slides/quiz-call-slide/quiz-call-slide.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  slides = [
    IntroSlideComponent,
    WhatIsSlideComponent,
    HowItHappensSlideComponent, 
    NationalDataSlideComponent,
    LawSlideComponent,
    IntersectionalitySlideComponent,
    FutureSlideComponent,
    StudySlideComponent,
    QuizCallSlideComponent,
  ];
}
