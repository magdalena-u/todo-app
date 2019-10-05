import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingTaskComponent } from './existing-task.component';

describe('ExistingTaskComponent', () => {
  let component: ExistingTaskComponent;
  let fixture: ComponentFixture<ExistingTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
