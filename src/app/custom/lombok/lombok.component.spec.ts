import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LombokComponent } from './lombok.component';

describe('LombokComponent', () => {
  let component: LombokComponent;
  let fixture: ComponentFixture<LombokComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LombokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LombokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
