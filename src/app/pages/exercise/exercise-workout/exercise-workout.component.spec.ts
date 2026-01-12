import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseWorkoutComponent } from './exercise-workout.component';

describe('ExerciseWorkoutComponent', () => {
  let component: ExerciseWorkoutComponent;
  let fixture: ComponentFixture<ExerciseWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseWorkoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
