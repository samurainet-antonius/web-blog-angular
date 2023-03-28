import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.css']
})
export class NewsDashboardComponent implements OnInit {

  public myChart: any;

  constructor() { }

  ngOnInit() {

    this.createChart()
  }

  createChart(){
    this.myChart  = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'Mei', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
              label: new Date().getFullYear() + ' # of News',
              data: [0, 0, 1, 1, 0, 0, 0, 0 ,0, 0 ,0 ,0],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

}
