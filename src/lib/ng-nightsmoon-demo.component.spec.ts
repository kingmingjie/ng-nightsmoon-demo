import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNightsmoonDemoComponent } from './ng-nightsmoon-demo.component';

describe('NgNightsmoonDemoComponent', () => {
  let component: NgNightsmoonDemoComponent;
  let fixture: ComponentFixture<NgNightsmoonDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgNightsmoonDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgNightsmoonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
