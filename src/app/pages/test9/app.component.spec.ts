import { TestBed } from '@angular/core/testing';
import { AppComponent9 } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent9],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent9);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the '11' title`, () => {
    const fixture = TestBed.createComponent(AppComponent9);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('11');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent9);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, 11');
  });
});
