import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeChildComponent } from './time-child.component';

describe('TimeChildComponent', () => {
  let component: TimeChildComponent;
  let fixture: ComponentFixture<TimeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
