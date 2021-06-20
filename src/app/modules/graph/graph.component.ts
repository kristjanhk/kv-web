import {Component, ViewChild} from '@angular/core';
import {ChartData, ChartDataSets, ChartOptions, ChartPoint, ChartTooltipItem} from 'chart.js';
import {BaseChartDirective, Color} from 'ng2-charts';
import {GraphRepository} from "../../generated/services/graph-repository";
import {KvGraphData} from "../../generated/models/kv-graph-data";
import {FilterModel} from "../filter/filter.model";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html'
})
export class GraphComponent {
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  loaded: boolean = false;

  lineChartData: ChartDataSetWithLink[] = [];
  lineChartOptions: ChartOptions = {
    responsive: true,
    spanGaps: true,
    elements: {
      point: {
        radius: 3
      },
      line: {
        fill: false,
        borderWidth: 2
      }
    },
    scales: {
      xAxes: [{
        type: 'time',
        distribution: 'linear',
        time: {
          unit: 'hour',
          displayFormats: {
            hour: 'DD.MM HH.mm'
          }
        }
      }],
      yAxes: [{
        ticks: {}
      }]
    },
    tooltips: {
      callbacks: {
        label(item: ChartTooltipItem, data: ChartData): string | string[] {
          const name = data.datasets![item.datasetIndex!].label;
          return `${name}: ${item.yLabel} EUR`;
        }
      }
    }
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];

  constructor(private graphRepository: GraphRepository) {
  }

  loadGraph(input: FilterModel): void {
    this.graphRepository.getData({body: input}).toPromise().then((graph: KvGraphData) => {
      this.loaded = false;
      console.log(graph);

      this.lineChartOptions.scales!.yAxes![0].ticks = {
        min: graph.minPrice,
        max: graph.maxPrice,
        stepSize: GraphComponent.getStepSize(graph)
      }

      this.lineChartData = graph.data.map(dto => <ChartDataSetWithLink>{
        label: dto.fullName,
        link: dto.link,
        data: dto.prices.map(point => <ChartPoint>{
          t: point.publishDate,
          y: point.price
        })
      });

      this.loaded = true;
    });
  }

  onChartClick(e: { event?: MouseEvent, active?: {}[] }): void {
    const elements: ElementMetaData[] = this.chart.chart.getElementAtEvent(e.event) as any;
    if (elements.length > 0) {
      const datasetIndex = elements[0]._datasetIndex;
      const datasets: ChartDataSetWithLink[] = this.chart.chart.data.datasets as any;
      const link = datasets[datasetIndex!].link;
      window.open(link, '_blank');
    }
  }

  private static getStepSize(graph: KvGraphData): number {
    const diff: number = graph.maxPrice - graph.maxPrice;
    if (diff < 1000) {
      return 10;
    }
    if (diff < 5000) {
      return 50;
    }
    if (diff < 10000) {
      return 100;
    }
    if (diff < 50000) {
      return 500;
    }
    if (diff < 100000) {
      return 1000;
    }
    return 2000;
  }
}

interface ChartDataSetWithLink extends ChartDataSets {
  link: string
}

interface ElementMetaData {
  _datasetIndex: number;
}
