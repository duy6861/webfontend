import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocComponent } from './choc.component';

describe('ChocComponent', () => {
  let component: ChocComponent;
  let fixture: ComponentFixture<ChocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
