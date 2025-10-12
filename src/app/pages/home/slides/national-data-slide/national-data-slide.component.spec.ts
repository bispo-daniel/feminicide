import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalDataSlideComponent } from './national-data-slide.component';

describe('NationalDataSlideComponent', () => {
  let component: NationalDataSlideComponent;
  let fixture: ComponentFixture<NationalDataSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NationalDataSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalDataSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
