import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SameRandomComponent } from './same-random.component';

describe('SameRandomComponent', () => {
  let component: SameRandomComponent;
  let fixture: ComponentFixture<SameRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SameRandomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SameRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
