import { Component, OnInit, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  private chart: am4charts.XYChart;
  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) {}

  random() {
    return 60 + Math.floor(Math.random() * 60);
  }

  getLineChart() {
    let chart = am4core.create('salesChart', am4charts.XYChart);

    // Add data
    chart.data = [
      {
        date: new Date(2020, 9, 1),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 2),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 3),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 4),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 5),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 6),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 7),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 8),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 9),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 10),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 11),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 12),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 13),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 14),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 15),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 16),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 17),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 18),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 19),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 20),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 21),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 22),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 23),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 24),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 25),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 26),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 27),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 28),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 29),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 30),
        value: this.random(),
      },
      {
        date: new Date(2020, 9, 31),
        value: this.random(),
      },
    ];

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = 'value';
    lineSeries.dataFields.dateX = 'date';
    lineSeries.name = 'Sales';
    lineSeries.strokeWidth = 3;

    // Add simple bullet
    let bullet = lineSeries.bullets.push(new am4charts.Bullet());
    let image = bullet.createChild(am4core.Image);
    // image.href = 'https://www.amcharts.com/lib/images/star.svg';
    image.width = 30;
    image.height = 30;
    image.horizontalCenter = 'middle';
    image.verticalCenter = 'middle';
  }
  ngOnInit(): void {
    this.getLineChart();
  }
}
