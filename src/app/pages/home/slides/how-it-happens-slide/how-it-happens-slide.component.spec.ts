import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItHappensSlideComponent } from './how-it-happens-slide.component';

describe('HowItHappensSlideComponent', () => {
  let component: HowItHappensSlideComponent;
  let fixture: ComponentFixture<HowItHappensSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowItHappensSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowItHappensSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
