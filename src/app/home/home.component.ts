import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showLoading:boolean=false;
  constructor(private dataService : DataService) { }
  data:any=[];
  url:string="http://rajeevr.com/myAppService/getMySummary.php";
  ngOnInit() {
    this.showLoading=true;
    this.dataService.getData(this.url).subscribe((data) => {
      this.data = data['items'];
      this.showLoading=false;
    });
  }

}
