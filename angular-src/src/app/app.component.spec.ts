import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

//  it(`should have as title 'angular-src'`, () => {
//    const fixture = TestBed.createComponent(AppComponent);
//    const app = fixture.componentInstance;
//    expect(app.title).toEqual('angular-src');
//  });
//
//  it('should render title', () => {
//    const fixture = TestBed.createComponent(AppComponent);
//    fixture.detectChanges();
//    const compiled = fixture.nativeElement;
//    expect(compiled.querySelector('.content span').textContent).toContain('angular-src app is running!');
//  });
});
