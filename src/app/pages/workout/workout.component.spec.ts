import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutComponent } from '/Users/jeydaparlar/Desktop/Peak-front/src/app/pages/workout/workout.component';

describe('ExerciseComponent', () => {
  let component: WorkoutComponent;
  let fixture: ComponentFixture<WorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
