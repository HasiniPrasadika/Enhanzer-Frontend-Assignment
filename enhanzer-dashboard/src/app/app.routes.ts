import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DealsComponent } from './deals/deals.component';
import { ReportsComponent } from './reports/reports.component';
import { ConfigComponent } from './config/config.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'deals', component: DealsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'config', component: ConfigComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  
];
