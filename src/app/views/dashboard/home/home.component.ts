import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Device } from 'src/app/model/Device.model';
//import { Chart } from 'node_modules/chart.js'


import { ChartsComponent } from '../charts/charts.component';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


var ctx = document.getElementById('myChart');


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  device :Device;
  deviceCategory : string ="House";
  houses :number=2;

 
 
  

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  
    
  }
  showSuccess() {
    this.toastr.success('Yow warraUp hommie!', 'Well Done!');
  }
  Qhouses(houseCount:number):number{
  
      if (this.deviceCategory.toLowerCase==this.device.deviceCategory.toLowerCase )
      {
       this.houses= houseCount++;
        
      }else{
        
  
      }
      return this.houses = houseCount;
    
  }
  printResultHouse(value:number){
    console.log(value)

  }

  lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Product A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Product B' }
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType = 'line';

  lineChartPlugins = [];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  
  
  


}
