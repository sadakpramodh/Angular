import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  @Input('ismarketToggle') ismarketToggle : boolean = false;
  @Input('isshoppingToggle') isshoppingToggle : boolean = false;
  constructor() { }
  x : string;
  toggle(x) {
    console.log(x);
    if (x == "market")
      this.ismarketToggle=!this.ismarketToggle;
    else if(x == "shopping")
      this.isshoppingToggle=!this.isshoppingToggle;
    else
      console.log(this.x);
  }
  ngOnInit() {
  }

}
