import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  showLoading:boolean=false;
  constructor(private dataService : DataService) { }
  data:any=[];
  url:string="http://rajeevr.com/myAppService/getMyTechSkills.php";
  ngOnInit() {
    this.showLoading=true;
    this.dataService.getData(this.url).subscribe((data) => {
      this.data = data['items'];
      this.showLoading=false;
    });
  }

}
