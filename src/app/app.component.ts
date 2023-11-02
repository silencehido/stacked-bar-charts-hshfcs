// app.component.ts
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import 'chartjs-top-round-bar'; // Eklentiyi import edin


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        color: 'white',
        display: true,
        align: 'center',
        anchor: 'center',
        formatter: (value, ctx) => {
          // Only show labels for the first dataset
          if (ctx.datasetIndex === 0) {
            return value + ' % Dolu - ' + value* 10  + ' LT';
          } else {
            return '';
          }
        },
      },
    },
    barRoundness: 0.5
  };
  public barChartLabels: Label[] = ['merkez', 'kemer', 'alanya', 'hidayet'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public colors = [{ backgroundColor: 'red' }, { backgroundColor: 'green' }];

  public barChartData: ChartDataSets[] = [
    {
      data: [40.2, 60, 30, 10],
      label: 'dolu',
      stack: 'a',
      backgroundColor: 'red',
      borderColor: 'black',
      borderWidth: 2
    },
    {
      data: [59.8, 40, 70, 90],
      label: 'boş',
      stack: 'a',
      backgroundColor: 'green',
      borderColor: 'black',
      borderWidth: 2
    },
  ];

  constructor() {}

  ngOnInit() {}
}
