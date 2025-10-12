import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCallSlideComponent } from './quiz-call-slide.component';

describe('QuizCallSlideComponent', () => {
  let component: QuizCallSlideComponent;
  let fixture: ComponentFixture<QuizCallSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizCallSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizCallSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
