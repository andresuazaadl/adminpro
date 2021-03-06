import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('labels') doughnutChartLabels: Label[] = [];
  @Input('data') doughnutChartData: number[] = [];
  @Input('type') doughnutChartType: ChartType;

  constructor() { }

  ngOnInit() { }

}
