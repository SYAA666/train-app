import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoepleComponent } from './poeple.component';

describe('PoepleComponent', () => {
  let component: PoepleComponent;
  let fixture: ComponentFixture<PoepleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoepleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoepleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
