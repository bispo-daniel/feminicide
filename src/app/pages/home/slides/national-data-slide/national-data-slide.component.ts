import { Component } from '@angular/core';
import type * as Highcharts from 'highcharts';
import {
  HighchartsChartComponent,
  ChartConstructorType,
  providePartialHighcharts,
} from 'highcharts-angular';

import topologyBR from '@highcharts/map-collection/countries/br/br-all.topo.json';
import { ItextComponent } from '../../../../components/itext/itext.component';

@Component({
  selector: 'app-national-data-slide',
  standalone: true,
  imports: [HighchartsChartComponent, ItextComponent],
  templateUrl: './national-data-slide.component.html',
  providers: [
    providePartialHighcharts({
      modules: () => [import('highcharts/esm/modules/map')],
    }),
  ],
})
export class NationalDataSlideComponent {
  private readonly anos = [
    2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
  ];
  private readonly serieBrasil = [
    449, 892, 1151, 1229, 1330, 1354, 1347, 1440, 1475, 1492,
  ];

  private readonly porUF2024: Record<string, number> = {
    AC: 8,
    AL: 22,
    AP: 2,
    AM: 29,
    BA: 111,
    CE: 41,
    DF: 23,
    ES: 39,
    GO: 56,
    MA: 69,
    MT: 47,
    MS: 35,
    MG: 163,
    PA: 50,
    PB: 26,
    PR: 109,
    PE: 77,
    PI: 40,
    RJ: 107,
    RN: 19,
    RS: 72,
    RO: 13,
    RR: 7,
    SC: 51,
    SP: 253,
    SE: 10,
    TO: 13,
  };

  private readonly ufToHcKey: Record<string, string> = {
    AC: 'br-ac',
    AL: 'br-al',
    AP: 'br-ap',
    AM: 'br-am',
    BA: 'br-ba',
    CE: 'br-ce',
    DF: 'br-df',
    ES: 'br-es',
    GO: 'br-go',
    MA: 'br-ma',
    MT: 'br-mt',
    MS: 'br-ms',
    MG: 'br-mg',
    PA: 'br-pa',
    PB: 'br-pb',
    PR: 'br-pr',
    PE: 'br-pe',
    PI: 'br-pi',
    RJ: 'br-rj',
    RN: 'br-rn',
    RS: 'br-rs',
    RO: 'br-ro',
    RR: 'br-rr',
    SC: 'br-sc',
    SP: 'br-sp',
    SE: 'br-se',
    TO: 'br-to',
  };

  private readonly mapSeriesData: [string, number][] = Object.entries(
    this.porUF2024
  ).map(([uf, v]) => [this.ufToHcKey[uf], v]) as [string, number][];

  mapConstructor: ChartConstructorType = 'mapChart';
  lineConstructor: ChartConstructorType = 'chart';

  mapOptions: Highcharts.Options = {
    chart: {
      map: topologyBR as any,
      backgroundColor: 'transparent',
    },
    title: { text: '' },
    legend: { enabled: true },
    mapNavigation: { enabled: true, enableButtons: false },
    tooltip: {
      headerFormat: '',
      pointFormat: '<b>{point.name}</b>: {point.value} casos (2024)',
    },
    colorAxis: {
      min: 0,
      max: 260,
      minColor: '#fde0dd',
      maxColor: '#7a0177',
    },
    series: [
      {
        type: 'map',
        name: 'Feminicídios (2024)',
        data: this.mapSeriesData,
        states: { hover: { color: '#9d1929' } },
        dataLabels: { enabled: false },
      },
    ],
  };

  lineOptions: Highcharts.Options = {
    chart: { type: 'line', backgroundColor: 'transparent' },
    title: { text: '' },
    xAxis: { categories: this.anos.map(String), tickLength: 0 },
    yAxis: {
      title: { text: undefined },
      labels: {
        formatter() {
          return String(this.value);
        },
      },
    },
    tooltip: {
      shared: true,
      valueDecimals: 0,
      pointFormat:
        '<span style="font-weight:600">{series.name}</span>: <b>{point.y}</b>',
    },
    legend: { enabled: true },
    plotOptions: { series: { marker: { enabled: true, radius: 3 } } },
    series: [
      {
        type: 'line',
        name: 'Feminicídios (Brasil)',
        data: this.serieBrasil,
      },
    ],
  };
}
