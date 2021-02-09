import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveBgComponent } from './wave-bg.component';

describe('WaveBgComponent', () => {
  let component: WaveBgComponent;
  let fixture: ComponentFixture<WaveBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveBgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
