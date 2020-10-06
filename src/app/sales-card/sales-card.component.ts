import { Component, OnInit } from '@angular/core';

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
  cash = [
    { location: 'Noida', drawer: 12345 },
    { location: 'Delhi', drawer: 23456 },
    { location: 'Ghaziabad', drawer: 34567 },
    { location: 'Haryana', drawer: 45678 },
  ];
  view = ['Weekly', 'Monthly', 'Yearly'];
  location = ['All', 'Noida', 'Delhi', 'Ghaziabad', 'Haryana'];
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
