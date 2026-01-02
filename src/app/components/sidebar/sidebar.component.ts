import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navItems = [
    { label: 'Home', route: '/', icon: '🏠' },
    { label: 'Workouts', route: '/workouts', icon: '💪' },
    { label: 'Exercises', route: '/exercises', icon: '🏋️' },
  ];
}
