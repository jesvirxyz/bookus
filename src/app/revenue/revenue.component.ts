import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss'],
})
export class RevenueComponent implements OnInit {
  constructor() {}
  newData = [
    {
      revenue: 'Services',
      sales: 43567,
    },
    {
      revenue: 'Products',
      sales: 24156,
    },
    {
      revenue: 'Voucher',
      sales: 14987,
    },
  ];

  ngOnInit(): void {
    var chart = am4core.create('revenue', am4charts.PieChart);

    // Add data
    chart.data = this.newData;

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'sales';
    pieSeries.dataFields.category = 'revenue';
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.labels.template.text = '';
    pieSeries.labels.template.fill = am4core.color('white');

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);
  }
}
