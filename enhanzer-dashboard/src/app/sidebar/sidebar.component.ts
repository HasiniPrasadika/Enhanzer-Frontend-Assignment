import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isVisible = true;

  constructor(private sidebarService: SidebarService) {}
  ngOnInit() {
    this.sidebarService.sidebarVisible$.subscribe((isVisible) => {
      this.isVisible = isVisible;
    });
  }
}
