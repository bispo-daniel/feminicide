import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsSlideComponent } from './what-is-slide.component';

describe('WhatIsSlideComponent', () => {
  let component: WhatIsSlideComponent;
  let fixture: ComponentFixture<WhatIsSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
