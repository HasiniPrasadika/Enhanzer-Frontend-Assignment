import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
})
export class DealsComponent {
  deals = [
    {
      dealSize: 75000,
      category: 'Fitness Equipments',
      employee: 'dilshan',
      location: 'Purchasing',
      pipeline: 'eZuite Sales',
      stage: 'Product Demo',
      lastUpdated: '2020-12-08 04:33:11',
    },
    {
      dealSize: 75000,
      category: 'Fitness Equipments',
      employee: 'kasun',
      location: 'Purchasing',
      pipeline: 'eZuite Sales',
      stage: 'Product Demo',
      lastUpdated: '2020-12-08 04:33:11',
    },
    {
      dealSize: 75000,
      category: 'Fitness Equipments',
      employee: 'mahesh',
      location: 'Purchasing',
      pipeline: 'eZuite Sales',
      stage: 'Product Demo',
      lastUpdated: '2020-12-08 04:33:11',
    },
    {
      dealSize: 75000,
      category: 'Fitness Equipments',
      employee: 'sanduni',
      location: 'Purchasing',
      pipeline: 'eZuite Sales',
      stage: 'Product Demo',
      lastUpdated: '2020-12-08 04:33:11',
    },
    {
      dealSize: 75000,
      category: 'Fitness Equipments',
      employee: 'rashmi',
      location: 'Purchasing',
      pipeline: 'eZuite Sales',
      stage: 'Product Demo',
      lastUpdated: '2020-12-08 04:33:11',
    },
    {
      dealSize: 75000,
      category: 'Fitness Equipments',
      employee: 'pubudu',
      location: 'Purchasing',
      pipeline: 'eZuite Sales',
      stage: 'Product Demo',
      lastUpdated: '2020-12-08 04:33:11',
    },
  ];

  filteredDeals = [...this.deals];

  onSearch(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredDeals = this.deals.filter((deal) =>
      Object.values(deal).some((value) =>
        value.toString().toLowerCase().includes(query)
      )
    );
  }
}
