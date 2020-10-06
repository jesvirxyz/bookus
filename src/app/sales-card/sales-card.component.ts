import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-sales-card',
  templateUrl: './sales-card.component.html',
  styleUrls: ['./sales-card.component.scss'],
})
export class SalesCardComponent implements OnInit {
  getMonth() {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    return month;
  }
  selectedLocation = 'All';
  selectedViews = 'Monthly';
  selectedRange = this.getMonth();
  selectedCompare = 'None';
  monthList = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  constructor() {}

  ngOnInit(): void {}
}
