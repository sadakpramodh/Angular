import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {
  f : object;
  sex= [
    {id: 1 , name: "Male"},
    {id : 2, name: "Female"}
  ];
  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' },
  ];
  constructor() { }

  ngOnInit() {
  }
  submit(f : object) {
    console.log(f);
    console.log("hhhh");
  }

}
