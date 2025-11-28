import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExerciseComponent } from "./pages/exercise/exercise.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Peak-front';
}
