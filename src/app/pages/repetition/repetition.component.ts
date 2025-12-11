import { Component, OnInit } from '@angular/core';
import { Repetition } from '../../models/repetition';
import { RepetitionService } from '../../services/repetition.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repetition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repetition.component.html',
  styleUrl: './repetition.component.css'
})
export class RepetitionComponent implements OnInit {
  repetitions: Repetition[] = [];

constructor(private repetitionService: RepetitionService) {}

ngOnInit() {
  this.repetitionService.getAll().subscribe(
    (data) => this.repetitions = data
  ); 
}

}
