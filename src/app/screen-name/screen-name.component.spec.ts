import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenNameComponent } from './screen-name.component';

describe('ScreenNameComponent', () => {
  let component: ScreenNameComponent;
  let fixture: ComponentFixture<ScreenNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
