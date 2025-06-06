import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRandomComponent } from './new-random.component';

describe('NewRandomComponent', () => {
  let component: NewRandomComponent;
  let fixture: ComponentFixture<NewRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRandomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
