import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  showLoading:boolean=false;
  constructor(private dataService : DataService) { }
  data:any=[];
  url:string="http://rajeevr.com/myAppService/getMyProjectList.php";
  ngOnInit() {
    this.showLoading=true;
    this.dataService.getData(this.url).subscribe((data) => {
      this.data = data['items'];
      this.showLoading=false;
    });
  }

}
