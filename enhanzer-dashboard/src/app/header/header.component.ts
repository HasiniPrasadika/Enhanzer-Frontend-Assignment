import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  headerText: string = '';

  constructor(private sidebarService: SidebarService, private router: Router) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setHeaderText(event.url); // Update header text based on URL
      }
    });

    // Set initial header text on component initialization
    this.setHeaderText(this.router.url);
  }
  setHeaderText(url: string) {
    // Example logic: Set header text based on URL
    if (url.includes('/deals')) {
      this.headerText = 'Deals';
    } else if (url.includes('/dashboard')) {
      this.headerText = 'Dashboard';
    } else if (url.includes('/reports')) {
      this.headerText = 'Reports';
    } else if (url.includes('/config')) {
      this.headerText = 'Config';
    } else {
      this.headerText = ''; // Set default header text
    }
  }
}
