import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenaxhoLendetComponent } from './menaxho-lendet.component';

describe('MenaxhoLendetComponent', () => {
  let component: MenaxhoLendetComponent;
  let fixture: ComponentFixture<MenaxhoLendetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenaxhoLendetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenaxhoLendetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
