import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItextComponent } from './itext.component';

describe('ItextComponent', () => {
  let component: ItextComponent;
  let fixture: ComponentFixture<ItextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
