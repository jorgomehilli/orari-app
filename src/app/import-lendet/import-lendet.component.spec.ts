import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLendetComponent } from './import-lendet.component';

describe('ImportLendetComponent', () => {
  let component: ImportLendetComponent;
  let fixture: ComponentFixture<ImportLendetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportLendetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportLendetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
