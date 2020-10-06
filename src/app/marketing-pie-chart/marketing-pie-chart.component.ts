import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-marketing-pie-chart',
  templateUrl: './marketing-pie-chart.component.html',
  styleUrls: ['./marketing-pie-chart.component.scss'],
})
export class MarketingPieChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let chart = am4core.create('marketing', am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: 'BookIT App',
        litres: 501.9,
      },
      {
        country: 'Facebook',
        litres: 301.9,
      },
      {
        country: 'Google Maps',
        litres: 201.1,
      },
      {
        country: 'Walk In',
        litres: 165.8,
      },
      {
        country: 'Drive In',
        litres: 139.9,
      },
      {
        country: 'Instagram',
        litres: 128.3,
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'litres';
    pieSeries.dataFields.category = 'country';
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
