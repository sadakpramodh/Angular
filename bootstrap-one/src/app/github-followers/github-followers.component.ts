import { GithubFollowersService } from './../github-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers : any[];

  constructor(private service : GithubFollowersService) {
    // we ae imported github service that we created earlier
   }

  ngOnInit() {
    this.service.getAll()
    .subscribe(followers => this.followers =followers)
  }

}
