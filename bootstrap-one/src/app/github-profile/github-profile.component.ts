import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import 'rxjs.add.operator/map';
// import 'rxjs.add.operator/switchmap';
// import 'rxjs.add.Observable/combineLatests';


@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  id : number;
  constructor(private route : ActivatedRoute) { }
  //declaring route variable as private of instance ActivatedRoute
  
  ngOnInit() {
    this.route.paramMap
    .subscribe(params =>{
      this.id =  +params.get('username');
    });
    console.log(this.id);
  }

  // submit() {
  //   this.route.navigate(['/followers']),{
  //     queryParams:{page:1,order:'newest'}
  //   }
  // }
  
}
