import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-one-component',
  templateUrl: './one-component.component.html',
  styleUrls: ['./one-component.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class OneComponentComponent implements OnInit {

@Input('isFavorite') isSelected : boolean;
@Output('changed') change = new EventEmitter();
  constructor() { }
  courses;
  tasks = {title:'Review Application',
    assigine:{
      name:'sadak pramodh',
      id: null
    }
  }

  ngOnInit() {
  }
  OnClick(){
    this.isSelected= !this.isSelected;
    this.change.emit({ newValue : this.isSelected });
  }
  updateCourse()  {
    this.courses =[
      { id: 1, name: 'course 1' },
      { id: 2, name: 'course 2' },
      { id: 3, name: 'course 3' },
      { id: 4, name: 'course 4' }
     ];
  }
  deleteCourse(course)  {
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1)
  }
  addCourse() {
    this.courses.push({id : 5, name: 'course 5'});
  }
  
trackCourses(index, course){
  return course ? course.id : undefined;
}
}

export interface FavoriteChangedEventArgs {
  newValue : boolean;
}
