import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrariProvimeveComponent } from './orari-provimeve.component';

describe('OrariProvimeveComponent', () => {
  let component: OrariProvimeveComponent;
  let fixture: ComponentFixture<OrariProvimeveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrariProvimeveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrariProvimeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
