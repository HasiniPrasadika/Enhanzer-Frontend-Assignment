import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSidebarVisible = true;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.sidebarVisible$.subscribe(isVisible => {
      this.isSidebarVisible = isVisible;
    });
  }
}
