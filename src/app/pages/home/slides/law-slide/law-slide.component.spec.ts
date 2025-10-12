import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawSlideComponent } from './law-slide.component';

describe('LawSlideComponent', () => {
  let component: LawSlideComponent;
  let fixture: ComponentFixture<LawSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LawSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
