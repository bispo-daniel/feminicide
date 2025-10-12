import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureSlideComponent } from './future-slide.component';

describe('FutureSlideComponent', () => {
  let component: FutureSlideComponent;
  let fixture: ComponentFixture<FutureSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutureSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
