import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  showLoading:boolean=false;
  constructor(private dataService : DataService) { }
  data:any=[];
  url:string="http://rajeevr.com/myAppService/getMyExperience.php";
  ngOnInit() {
    this.showLoading=true;
    this.dataService.getData(this.url).subscribe((data) => {
      this.data = data['items'];
      this.showLoading=false;
    });
  }

}
