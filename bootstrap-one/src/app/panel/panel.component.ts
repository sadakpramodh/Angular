import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstrap-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  post = {
    title: "Title", 
    isSelected: true
  };
  courses = [1,2];
  viewMode="list";

}
