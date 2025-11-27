import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExerciseComponent } from "./pages/exercise/exercise.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Peak-front';
}
