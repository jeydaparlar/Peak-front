import { Component,Input} from '@angular/core';
import { SetResponse } from '../../models/set/set-response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-set-card',
  imports: [CommonModule],
  templateUrl: './set-card.component.html',
  styleUrl: './set-card.component.css'
})
export class SetCardComponent {
  @Input() set!: SetResponse;

}
