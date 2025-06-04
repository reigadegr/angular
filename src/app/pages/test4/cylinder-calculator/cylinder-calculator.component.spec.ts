import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderCalculatorComponent } from './cylinder-calculator.component';

describe('CylinderCalculatorComponent', () => {
  let component: CylinderCalculatorComponent;
  let fixture: ComponentFixture<CylinderCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CylinderCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CylinderCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
