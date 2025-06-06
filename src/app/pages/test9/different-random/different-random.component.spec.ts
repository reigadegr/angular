import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentRandomComponent } from './different-random.component';

describe('DifferentRandomComponent', () => {
  let component: DifferentRandomComponent;
  let fixture: ComponentFixture<DifferentRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifferentRandomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifferentRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
