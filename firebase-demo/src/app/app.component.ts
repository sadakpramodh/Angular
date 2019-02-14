
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{ // implements OnDestroy
  // observable representation
  courses$;
  course$;
  // courses: any [];
  // subscription: Subscription;
  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('/courses'); 
    this.course$ = db.object('/courses/1');
    // this.subscription = db.list('/courses')
    //   .subscribe(courses => {
    //     this.courses = courses;
    //     console.log(this.courses);
    //   });
  }
  // ngOnDestroy() {
  //   //Avoids memory leak
  //   this.subscription.unsubscribe();
  // }
}
