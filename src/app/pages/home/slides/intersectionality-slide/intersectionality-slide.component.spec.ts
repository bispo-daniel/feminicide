import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersectionalitySlideComponent } from './intersectionality-slide.component';

describe('IntersectionalitySlideComponent', () => {
  let component: IntersectionalitySlideComponent;
  let fixture: ComponentFixture<IntersectionalitySlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntersectionalitySlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntersectionalitySlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
